import "@babel/polyfill";
import createError from "http-errors";
import express from "express";
import path from "path";
import cors from "cors";
import cookieParser from "cookie-parser";
import logger from "morgan";

// Config should be at the top of our imports so it is loaded before rest of the app since imports are hoisted.
import "./config";

import swaggerUi from "swagger-ui-express";
import { spec } from "./configs/swaggerJsDocs";

import indexRouter from "./routes/index";

const whitelist = ["http://localhost:80"];

const app = express();

// Swagger setup
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(spec));

app.use(logger("dev"));
app.use(
  cors({
    methods: ["DELETE", "GET", "OPTIONS", "POST", "PUT"],
    origin: whitelist
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
