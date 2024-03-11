import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import authRouts from "./routes/api/auth-routes.js";
import contactRouts from "./routes/api/contacts-routes.js";

export const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

//routes
app.use("/api/auth", authRouts);
app.use("/api/contacts", contactRouts);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});
