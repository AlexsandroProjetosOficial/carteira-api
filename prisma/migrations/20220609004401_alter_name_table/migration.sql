/*
  Warnings:

  - You are about to drop the `usersVirtualAccounts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "usersVirtualAccounts";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "UsersVirtualAccounts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "virtualAccountId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME,
    "status" INTEGER NOT NULL DEFAULT 1,
    CONSTRAINT "UsersVirtualAccounts_virtualAccountId_fkey" FOREIGN KEY ("virtualAccountId") REFERENCES "virtualAccounts" ("id") ON DELETE SET NULL ON UPDATE SET NULL,
    CONSTRAINT "UsersVirtualAccounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE SET NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "UsersVirtualAccounts_id_key" ON "UsersVirtualAccounts"("id");
