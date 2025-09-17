import fs from "fs";

//Read data from a file
// fs.readFile("data.txt", "utf8", (error, data) => {
//   if (error) {
//     console.log("Error reading file");
//     return;
//   }
//   console.log(data);
// });

//Write data to a file
// fs.writeFile("data.txt", "Hello World!", (error, data) => {
//   if (error) {
//     console.log("Error writing file");
//     return;
//   } else {
//     console.log("File written successfully");
//   }
// });

//Append data to a file
// fs.appendFile("data.txt", "\nHello Ardev!", (error, data) => {
//   if (error) {
//     console.log("Error appending file");
//     return;
//   } else {
//     console.log("File appended successfully");
//   }
// });

//Delete a file
fs.rm("data.txt", (error, data) => {
  if (error) {
    console.log("Error deleting file");
    return;
  } else {
    console.log("File deleted successfully");
  }
});
