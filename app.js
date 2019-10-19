import http from "http";
import express from "express";
import logger from "morgan";
import bodyParser from "body-parser";
import cors from "cors";

import routes from "./server/routes";

const hostname = "127.0.0.1";
const port = 8080;
const app = express(); // setup express application
const server = http.createServer(app);

app.use(cors());
app.use(logger("dev")); // log requests to the console

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
