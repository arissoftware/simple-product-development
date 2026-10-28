CREATE TABLE "products" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "products_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(50) NOT NULL,
	"description" text,
	"category" varchar(50) NOT NULL,
	"price" integer NOT NULL,
	"stock" integer DEFAULT 0 NOT NULL,
	"image" text,
	"isActive" boolean DEFAULT true,
	"createdAt" timestamp with time zone DEFAULT now()
);
