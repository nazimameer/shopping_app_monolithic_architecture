import { Express } from "express";
import cors from "cors";

module.exports = async (app) => {
    app.use(express.json({ limit: '1mb'}));
    app.use(express.urlencoded({ extended: true, limit: '1mb'}));
    app.use(cors());
}