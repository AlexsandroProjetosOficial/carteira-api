-- CreateTable
CREATE TABLE "virtualAccounts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME,
    "status" INTEGER NOT NULL DEFAULT 1
);

-- CreateTable
CREATE TABLE "users" (
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

-- CreateTable
CREATE TABLE "usersVirtualAccounts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "virtualAccountId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME,
    "status" INTEGER NOT NULL DEFAULT 1,
    CONSTRAINT "usersVirtualAccounts_virtualAccountId_fkey" FOREIGN KEY ("virtualAccountId") REFERENCES "virtualAccounts" ("id") ON DELETE SET NULL ON UPDATE SET NULL,
    CONSTRAINT "usersVirtualAccounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE SET NULL
);

-- CreateTable
CREATE TABLE "flags" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME,
    "status" INTEGER NOT NULL DEFAULT 1
);

-- CreateTable
CREATE TABLE "creditCards" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cardNumber" TEXT NOT NULL,
    "creditCardName" TEXT NOT NULL,
    "securityCode" INTEGER NOT NULL,
    "sinceMember" TEXT NOT NULL,
    "validThru" TEXT NOT NULL,
    "limit" REAL NOT NULL,
    "expirationDay" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME,
    "status" INTEGER NOT NULL DEFAULT 1,
    "flagId" TEXT NOT NULL,
    "virtualAccountId" TEXT NOT NULL,
    CONSTRAINT "creditCards_virtualAccountId_fkey" FOREIGN KEY ("virtualAccountId") REFERENCES "virtualAccounts" ("id") ON DELETE SET NULL ON UPDATE SET NULL,
    CONSTRAINT "creditCards_flagId_fkey" FOREIGN KEY ("flagId") REFERENCES "flags" ("id") ON DELETE SET NULL ON UPDATE SET NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "virtualAccounts_id_key" ON "virtualAccounts"("id");

-- CreateIndex
CREATE UNIQUE INDEX "virtualAccounts_code_key" ON "virtualAccounts"("code");

-- CreateIndex
CREATE UNIQUE INDEX "virtualAccounts_name_key" ON "virtualAccounts"("name");

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "usersVirtualAccounts_id_key" ON "usersVirtualAccounts"("id");

-- CreateIndex
CREATE UNIQUE INDEX "flags_id_key" ON "flags"("id");

-- CreateIndex
CREATE UNIQUE INDEX "creditCards_id_key" ON "creditCards"("id");
