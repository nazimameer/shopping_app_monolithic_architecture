import { json, urlencoded } from "express";
import cors from "cors";

export default async function configureMiddleware(app) {
  app.use(json({ limit: '1mb' }));
  app.use(urlencoded({ extended: true, limit: '1mb' }));
  app.use(cors());
}