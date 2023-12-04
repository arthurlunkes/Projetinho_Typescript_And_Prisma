import { PrismaClient as PrismaClientOriginal } from '@prisma/client';

declare module 'prisma-types' {
    export type PrismaClient = PrismaClientOriginal;
}

export * from '@prisma/client';
