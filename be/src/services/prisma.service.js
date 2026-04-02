import { PrismaClient } from '@prisma/client';

let prisma;

export const getPrismaClient = () => {
  if (!prisma) {
    prisma = new PrismaClient();
  }

  return prisma;
};

export const connectPrisma = async () => {
  const client = getPrismaClient();
  await client.$connect();
  return client;
};
