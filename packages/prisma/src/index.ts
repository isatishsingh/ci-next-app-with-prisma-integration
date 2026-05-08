import dotenv from "dotenv";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";


const envPath = [
  ".env",
  "../.env",
  "../../packages/prisma/.env",
  "packages/prisma/.env",
]
  .map((path) => resolve(process.cwd(), path))
  .find(existsSync);

if (envPath) {
  dotenv.config({ path: envPath });
}

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error(
    "DATABASE_URL is missing. Add it to your .env file.",
  );
}

const adapter = new PrismaPg({
  connectionString: databaseUrl.toString(),
});

export const prisma = new PrismaClient({ adapter });