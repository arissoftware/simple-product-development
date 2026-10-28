// import "dotenv/config";
// import { drizzle } from "drizzle-orm/node-postgres";
// import { Pool } from "pg";

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });

// export const db = drizzle({ client: pool });

// import { drizzle } from "drizzle-orm/neon-http";
// import { neon } from "@neondatabase/serverless";

// const getBranchUrl = () => {
//   const env = process.env.NODE_ENV;
//   if (env === "development") return process.env.DATABASE_URL;
//   if (env === "test") return process.env.DATABASE_URL;
//   return process.env.DATABASE_URL;
// };

// const sql = neon(getBranchUrl());
// export const db = drizzle({ client: sql });

// import "dotenv/config";
// import { drizzle } from "drizzle-orm/node-postgres";
// import { Pool } from "pg";

// const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// export const db = drizzle({ client: pool });

import "dotenv/config";
import fs from "node:fs";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    ca: fs.readFileSync(new URL("../../ca.pem", import.meta.url), "utf8"),
    rejectUnauthorized: true,
  },
});

export const db = drizzle({ client: pool });
