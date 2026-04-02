import express from "express";
import { PORT } from "./env/index.js";

const app = express();

app.listen(PORT, () => {
  console.table(`Server running at http://localhost:${PORT}`);
});

export default app;