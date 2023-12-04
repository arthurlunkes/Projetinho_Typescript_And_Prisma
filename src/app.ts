import express, { Express } from "express";
import routes from "./routes";

const server: Express = express();

server.use(express.json());
server.use(routes);

export default server;
