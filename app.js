const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 10000;

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.get("/", (req, res) => {
  res.send("Revenue Pilot is live 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});