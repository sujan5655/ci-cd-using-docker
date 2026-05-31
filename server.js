import express from "express";

import dotenv from "dotenv";
dotenv.config();
const app = express();
app.get("/", (req, res) => {
  res.json(
    "Welcome to Node js and Express js  in docker and Docker compose! Hello Sujan, RAM, Hari",
  );
});
const PORTS = process.env.PORT;
app.listen(PORTS, () => {
  console.log(`Server is running on port no ${PORTS}`);
});
