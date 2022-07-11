const testEncoding = (str) => {
  console.log("str", str);
  // covert into a buffer of binary integer
  const endcodedString = Buffer.from(str).toString("base64");
  console.log("endcodedString", endcodedString);

  //decode
  const decodedString = Buffer.from(endcodedString).toString("ascii");
  console.log("decodedString", decodedString);
};

testEncoding("string_to_endcode");
