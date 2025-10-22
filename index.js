const express = require("express");
const app = express();
const started = Date.now();
 
app.get("/", (req, res) => {
  res.json({ message: "Hello from Node on AWS!" });
});
 
app.get("/healthz", (req, res) => res.status(200).send("ok"));
 
app.get("/metrics", (req, res) => {
  const uptime = Math.floor((Date.now() - started) / 1000);
  res.set("Content-Type", "text/plain; version=0.0.4"); // Prometheus text format
  res.send(`app_uptime_seconds ${uptime}\n`);
});
 
const port = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(port, () => console.log(`Server listening on ${port}`));
}
module.exports = app; // so tests can import the app
