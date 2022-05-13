-- CreateTable
CREATE TABLE "virtualAccounts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 1
);

-- CreateIndex
CREATE UNIQUE INDEX "virtualAccounts_id_key" ON "virtualAccounts"("id");

-- CreateIndex
CREATE UNIQUE INDEX "virtualAccounts_code_key" ON "virtualAccounts"("code");

-- CreateIndex
CREATE UNIQUE INDEX "virtualAccounts_name_key" ON "virtualAccounts"("name");
