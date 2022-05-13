/*
  Warnings:

  - Added the required column `virtualAccountId` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Users" (
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
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 1,
    "virtualAccountId" TEXT NOT NULL,
    CONSTRAINT "Users_virtualAccountId_fkey" FOREIGN KEY ("virtualAccountId") REFERENCES "virtualAccounts" ("id") ON DELETE SET NULL ON UPDATE SET NULL
);
INSERT INTO "new_Users" ("avatar", "birthday", "cpf", "createdAt", "deletedAt", "email", "firstName", "id", "lastName", "nickName", "password", "phone", "status", "updatedAt") SELECT "avatar", "birthday", "cpf", "createdAt", "deletedAt", "email", "firstName", "id", "lastName", "nickName", "password", "phone", "status", "updatedAt" FROM "Users";
DROP TABLE "Users";
ALTER TABLE "new_Users" RENAME TO "Users";
CREATE UNIQUE INDEX "Users_id_key" ON "Users"("id");
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
