// MODULES
const title = "Our Little Farm & Nursery"

const express = require("express");
// The path module provides you with utilities for working with file and directory paths.
const path = require("path")

const app = express();
const port = process.env.PORT || 3001;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) =>
{
  res.render("index", { title: title });  
});

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
