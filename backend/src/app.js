const express = require("express");
const healthRoute = require("./routes/health");

const app = express();

app.use(express.json());
app.use("/", healthRoute);

app.get("/", (req, res) => {
  res.json({
    message: "Production backend service running 🚀"
  });
});

module.exports = app;
