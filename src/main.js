"use strict";
const express = require("express");
const app = express();
const jwt = require("express-jwt");
const fs = require("fs");
const path = require("path");
const keypath = path.resolve("ookla-extracts.pem");

let secret;
fs.access(keypath, fs.constants.R_OK, (err) => {
  secret = err ? secret = fs.readFileSync(keypath) : process.env.PUBLIC_KEY;
});

app.use(jwt({ secret, algorithms: ["RS256"] }));

app.get("/", (req, res) => {
  res.send(`JWT VERIFIED! PAYLOAD: \n ${JSON.stringify(req.user)}`);
});

app.listen(8000);
