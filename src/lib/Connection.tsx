import { Client } from "pg";

export async function getClient() {
  const port = process.env.DB_PORT
    ? parseInt(process.env.DB_PORT, 10)
    : undefined;

  const connection = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  await connection.connect();

  return connection;
}
