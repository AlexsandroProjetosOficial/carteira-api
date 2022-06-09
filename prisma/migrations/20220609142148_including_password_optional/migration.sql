-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
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
