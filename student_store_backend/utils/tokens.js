const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
// const SECRET_KEY = "123supersecret4me";

const generateToken = (data) =>
  jwt.sign(data, SECRET_KEY, { expiresIn: "24h" });

const createUserJwt = () => {
  const payload = { email: user.email, isAdmin: user.isAdmin || false };
  return generateToken(payload);
};

const validateToken = (token) => {
  try {
    const decoded = jwt.verify(token, SECRET_KEY);

    return decoded;
  } catch (err) {
    return {};
  }
};

module.exports = {
  generateToken,
  createUserJwt,
  validateToken,
};

//   const validatedToken = validateToken(token);
//   console.log("validated token", validatedToken);

// const testEncoding = (str) => {
//   console.log("str", str);
//   // covert into a buffer of binary integer
//   const endcodedString = Buffer.from(str).toString("base64");
//   console.log("endcodedString", endcodedString);

//   //decode
//   const decodedString = Buffer.from(endcodedString, "base64").toString("ascii");
//   console.log("decodedString", decodedString);
// };

// testEncoding("string_to_endcode");
createUserJwt();
