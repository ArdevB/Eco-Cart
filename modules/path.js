import path from "path";

const filePath = "MERN/Projects/E-Commerce/client/src/assets/images/logo.png";

//basename
console.log(path.basename(filePath));

//dirname
console.log(path.dirname(filePath));

//extension
console.log(path.extname(filePath));

//parse
console.log(path.parse(filePath));