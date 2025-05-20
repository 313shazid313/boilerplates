import express from "express";
import cors from "cors";

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("The server is running successfully...");
});

export default app;
