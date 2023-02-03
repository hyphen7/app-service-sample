const express = require("express");
const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.get("/", (req, res) => {
    console.log("Request /");
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log("Express is running.");
});