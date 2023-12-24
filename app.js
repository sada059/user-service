const bodyParser = require("body-parser");
const express = require("express");
const config = require("config");
const glob = require("glob");
const path = require("path");
const db = require("./lib/utils/db");

const app = express();
app.use(bodyParser.json());

async function initialize() {
  if (app.isAppInitialized) {
    return;
  }
  await db.connect();
  await loadModels();
  console.log({ description: "All models loaded" });

  await setupAndloadUserRoutes();
  return app;
}

async function setupAndloadUserRoutes() {
  glob.sync("./routes/v1/user_routes/*.js").forEach(function (file) {
    app.use(`/${config.get("api.version")}`, require(path.resolve(file)));
  });
}

function loadModels() {
  const models = [];
  glob.sync("./models/**/*.js").forEach(async function (file) {
    const model = require(path.resolve(file));
    models[model.modelName] = model;
  });
  return models;
}

app.initialize = initialize;

module.exports = app;
