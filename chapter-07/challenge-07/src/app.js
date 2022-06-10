const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const swaggerUi = require("swagger-ui-express");

const { authorization, errorHandling } = require("./api/middlewares");
const { indexRouter, usersRouter, loginRouter } = require("./api/routes");
const swaggerDocument = require("./api-docs/swagger.json");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "api/public")));
app.use("/api-docs", swaggerUi.serve);

app.get("/api-docs", swaggerUi.setup(swaggerDocument));
app.use("/", indexRouter);
app.use("/login", loginRouter);
app.use(authorization);
app.use("/users", usersRouter);
app.use(errorHandling);

module.exports = app;
