const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const sentry = require("@sentry/node");

const { errorHandling } = require("./api/middlewares");
const routes = require("./api/routes");

const app = express();

app.use(logger("dev"));

sentry.init({
  dsn: process.env.SENTRY_DSN,
});
app.use(express.json());
app.use((req, res, next) => {
  req.sentry = sentry;
  next();
});

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "api/public")));

app.use(routes);
app.use(errorHandling);

module.exports = app;
