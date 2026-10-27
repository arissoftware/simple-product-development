import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/models/product.model.js",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
