// const jwt = require("jsonwebtoken");
// const SECRET_KEY = "123supersecret4me";

// const generateToken = (data) =>
//   jwt.sign(data, SECRET_KEY, { algorithm: "HS256", expiresIn: 10000 });

// const validateToken = (token) => jwt.verify(token, SECRET_KEY);

// const testTokens = () => {
//   const user = { email: "person@gmail.com" };

//   const token = generateToken(user);
//   console.log("token", token);
//   const validatedToken = validateToken(token);
//   console.log("validated token", validatedToken);
// };
// // const testEncoding = (str) => {
// //   console.log("str", str);
// //   // covert into a buffer of binary integer
// //   const endcodedString = Buffer.from(str).toString("base64");
// //   console.log("endcodedString", endcodedString);

// //   //decode
// //   const decodedString = Buffer.from(endcodedString, "base64").toString("ascii");
// //   console.log("decodedString", decodedString);
// // };

// // testEncoding("string_to_endcode");
// testTokens();
