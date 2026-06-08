import express from "express";
import cors from "cors";
import githubRoutes from "./routes/githubRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "GitHub Repo Explorer API",
  });
});

app.use("/api/users", githubRoutes);

export default app;