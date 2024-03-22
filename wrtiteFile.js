const fs = require("fs");
// import fs from "fs";


fs.writeFile("message.txt", "Try and Try in will be succsess.", (err) => {
  if (err) throw err;
  console.log("The file has been Saved!");
});

