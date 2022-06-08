/*
  Warnings:

  - You are about to drop the column `virtualAccountId` on the `users` table. All the data in the column will be lost.
  - Added the required column `userId` to the `virtualAccounts` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_virtualAccounts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME,
    "status" INTEGER NOT NULL DEFAULT 1,
    "userId" TEXT NOT NULL,
    CONSTRAINT "virtualAccounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE SET NULL
);
INSERT INTO "new_virtualAccounts" ("code", "createdAt", "deletedAt", "id", "name", "status", "updatedAt") SELECT "code", "createdAt", "deletedAt", "id", "name", "status", "updatedAt" FROM "virtualAccounts";
DROP TABLE "virtualAccounts";
ALTER TABLE "new_virtualAccounts" RENAME TO "virtualAccounts";
CREATE UNIQUE INDEX "virtualAccounts_id_key" ON "virtualAccounts"("id");
CREATE UNIQUE INDEX "virtualAccounts_code_key" ON "virtualAccounts"("code");
CREATE UNIQUE INDEX "virtualAccounts_name_key" ON "virtualAccounts"("name");
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "nickName" TEXT,
    "birthday" DATETIME,
    "phone" TEXT,
    "avatar" TEXT,
    "cpf" TEXT,
    "isAdmin" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME,
    "status" INTEGER NOT NULL DEFAULT 1
);
INSERT INTO "new_users" ("avatar", "birthday", "cpf", "createdAt", "deletedAt", "email", "firstName", "id", "isAdmin", "lastName", "nickName", "password", "phone", "status", "updatedAt") SELECT "avatar", "birthday", "cpf", "createdAt", "deletedAt", "email", "firstName", "id", "isAdmin", "lastName", "nickName", "password", "phone", "status", "updatedAt" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
