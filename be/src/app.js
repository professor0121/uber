import express from "express";
import { port } from "./config/env.js";
import { connectDB } from "./services/postgres.service.js";
import { connectRedis } from "./services/redis.service.js";
import { connectQueue } from "./services/rabbitmq.service.js";
import {logServices} from './utils/services.logger.js'

const app = express();

async function startServer() {
  try {
    connectDB();
    connectRedis();
    await connectQueue();

    app.listen(port, () => {
      console.log("\nServer Started Successfully\n");
      logServices(port);
    });
  } catch (error) {
    console.error("Server failed to start:", error);
  }
}

startServer();
startServer();
export default app;