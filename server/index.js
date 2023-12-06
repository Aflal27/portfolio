import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import projectRoute from "./routes/projectRoute.js";
import path from "path";

const app = express();
app.use(express.json());
// db

mongoose
  .connect(process.env.MONGO_KEY)
  .then(() => {
    console.log("db connected");
  })
  .catch((error) => {
    console.log(error);
  });

// build
const __dirname = path.resolve();

// router
app.use("/api/project", projectRoute);

// build
app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

// middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || "500";
  const message = err.message || "Internal Server";

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(8000, () => {
  console.log("server start");
});
