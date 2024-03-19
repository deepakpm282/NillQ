import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoute from "./routes/users";
import authRoute from "./routes/auth";
import cookieParser from "cookie-parser"; /*Here we have to install a package "npm i --save-dev @types/cookie-parser" */

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL, // Allow requests from this origin
    credentials: true, // Allow credentials such as cookies, authorization headers, etc.
  })
);

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(7000, () => {
  console.log("Server is running on port 7000");
});

export default userRoute;
