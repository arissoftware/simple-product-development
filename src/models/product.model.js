import {
  pgTable,
  integer,
  varchar,
  text,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 50 }).notNull(),
  description: text(),
  category: varchar({ length: 50 }).notNull(),
  price: integer().notNull(),
  stock: integer().default(0).notNull(),
  image: text(),
  isActive: boolean().default(true),
  createdAt: timestamp({ withTimezone: true }).defaultNow(),
});
