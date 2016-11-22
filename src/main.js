"use strict";
const express = require("express");
const app = express();
const jwt = require("express-jwt");
const fs = require("fs");
const path = require("path");
const secret = fs.readFileSync(path.resolve("ookla-extracts.pem"));

app.use(jwt({ secret, algorithms: ["RS256"] }));

app.get("/", (req, res) => {
  res.send(`JWT VERIFIED! PAYLOAD: \n ${JSON.stringify(req.user)}`);
});

app.listen(8000);
