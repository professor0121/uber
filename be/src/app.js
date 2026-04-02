import express from "express";
import { port } from "./config/env.js";
import { connectRedis } from "./services/redis.service.js";
import { connectQueue } from "./services/rabbitmq.service.js";
import AppRouter from "./routes/app.routes.js"
import { configDotenv } from "dotenv";
import { connectDB } from "./lib/connectDb.js";
configDotenv

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function startServer() {
  try {
    await connectDB();
    connectRedis();
    await connectQueue();
    app.use("/api/v1",AppRouter)
    app.listen(port, () => {
      console.log("\nServer Started Successfully\n");
    });
  } catch (error) {
    console.error("Server failed to start:", error);
  }
}

startServer();
export default app;
