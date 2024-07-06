import { Client } from "pg";

export async function getClient(url: string) {
  const connection = new Client({
    connectionString: url,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  await connection.connect();

  return connection;
}
