const app = require("./app");
const { port, serviceName } = require("./config/env");

const server = app.listen(port, () => {
  console.log(`✅ ${serviceName} running on port ${port}`);
});

/**
 * Graceful shutdown
 * Required for Docker, Kubernetes, Load Balancers
 */
const shutdown = (signal) => {
  console.log(`⚠️  Received ${signal}. Closing server...`);
  server.close(() => {
    console.log("🛑 Server closed gracefully");
    process.exit(0);
  });

  // Force exit if not closed in time
  setTimeout(() => {
    console.error("❌ Force exiting");
    process.exit(1);
  }, 10000);
};

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);
