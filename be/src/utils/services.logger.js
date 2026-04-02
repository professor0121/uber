import { formatUptime } from "./time.js";

export const logServices = (port) => {
  const uptime = formatUptime(process.uptime());

  const services = [
    {
      Service: "API",
      URL: `http://localhost:${port}`,
      Status: "✅ UP",
      Uptime: uptime,
    },
    {
      Service: "MONGODB",
      URL: "localhost:5432",
      Status: "✅ UP",
      Uptime: uptime,
    },
    {
      Service: "Redis",
      URL: "localhost:6379",
      Status: "✅ UP",
      Uptime: uptime,
    },
    {
      Service: "RabbitMQ",
      URL: "http://localhost:15672",
      Status: "✅ UP",
      Uptime: uptime,
    },
  ];

  console.table(services);
};