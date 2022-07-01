import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import entries from "./data/entryys.js";
import connectDB from "./config/db.js";

import entryRoutes from "./routes/entryRoutes.js";
import userRoutes from "./routes/userRoutes.js";

connectDB();

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("server is up and running");
});

app.use("/api/entries", entryRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);

app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
