import fs from "fs";
import path from "path";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import morgan from "morgan";
import express from "express";
const app = express();
const PORT = 8000;

/**
 * * Logs to be stored, whenever the request comes from client
 */
const InfoLogStream = fs.createWriteStream(
  path.join(__dirname, "logs", "info.log"),
  { flags: "a" }
);

app.use(morgan("combined", { stream: InfoLogStream }));

app.use(bodyParser.json());

/**
 * * To allow CORS
 */
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", (req, res) => res.send("Welcome"));

/**
 * * MONGODB_USERNAME and MONGODB_PASSWORD these environment variables we are going to pass from docker as ENV
 */
mongoose.connect(
  `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@mongodb:27017/blogs?authSource=admin`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.error(
        "error while connecting to database, please check the logs"
      );
      console.error(err);
    } else {
      console.log("Connected to database");
      app.listen(PORT, () => {
        console.log(`Server is running at ${PORT}`);
      });
    }
  }
);
