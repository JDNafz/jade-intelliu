
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

CREATE TABLE "user" (
	"id" serial NOT NULL,
	"username" varchar(50) NOT NULL UNIQUE,
	"password" varchar(1000) NOT NULL,
	"first_name" varchar(200),
	"last_name" varchar(200),
	"role" varchar(200),
	"company_name" varchar(200)
	CONSTRAINT "user_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "user_document" (
	"id" integer NOT NULL,
	"document_name" varchar(200) NOT NULL,
	"standard_id" integer NOT NULL,
	"user_id" integer NOT NULL,
	"JSON" bytea NOT NULL,
	"document_link" varchar(200) NOT NULL,
	CONSTRAINT "user_document_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "regulatory_standard" (
	"id" serial NOT NULL,
	"device_name" varchar(200) NOT NULL UNIQUE,
	"admin_id" integer NOT NULL,
	"document_link" varchar(200) NOT NULL,
	CONSTRAINT "regulatory_standard_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);




CREATE TABLE "invite" (
	"id" serial NOT NULL,
	"admin_id" integer NOT NULL,
	"email" varchar(200) NOT NULL,
	"invite_code" varchar(200) NOT NULL UNIQUE,
	CONSTRAINT "invite_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "user_document" ADD CONSTRAINT "user_document_fk0" FOREIGN KEY ("standard_id") REFERENCES "regulatory_standard"("id");
ALTER TABLE "user_document" ADD CONSTRAINT "user_document_fk1" FOREIGN KEY ("user_id") REFERENCES "user"("id");

ALTER TABLE "regulatory_standard" ADD CONSTRAINT "regulatory_standard_fk0" FOREIGN KEY ("admin_id") REFERENCES "user"("id");


ALTER TABLE "invite" ADD CONSTRAINT "invite_fk0" FOREIGN KEY ("admin_id") REFERENCES "user"("id");










