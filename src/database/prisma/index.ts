import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log:[{ level: 'query', emit: 'event'}]
});

prisma.$on('query', (e: any) => console.info(e));

export { prisma };