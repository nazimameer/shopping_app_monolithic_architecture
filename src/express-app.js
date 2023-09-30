import { json, urlencoded } from "express";
import cors from "cors";

module.exports = async (app) => {
    app.use(json({ limit: '1mb'}));
    app.use(urlencoded({ extended: true, limit: '1mb'}));
    app.use(cors());
}