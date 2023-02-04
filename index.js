const appInsights = require("applicationinsights");
const express = require("express");
const app = express();
const PORT = Number(process.env.PORT) || 3000;

appInsights.setup().setAutoCollectConsole(true, true).start();

app.get("/", (req, res) => {
    console.log("Request /", req.ip);
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log("Express is running.");
});