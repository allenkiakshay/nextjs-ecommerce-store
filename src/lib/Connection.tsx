import { PrismaClient } from "@prisma/client";

export async function getPrismaClient() {
  const connectionString = `${process.env.DATABASE_URL}`;

  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: connectionString,
      },
    },
  });

  await prisma.$connect();
  return prisma;
}
