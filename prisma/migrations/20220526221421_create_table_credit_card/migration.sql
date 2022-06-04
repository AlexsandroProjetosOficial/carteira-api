-- CreateTable
CREATE TABLE "creditCards" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cardNumber" TEXT NOT NULL,
    "creditCardName" TEXT NOT NULL,
    "securityCode" INTEGER NOT NULL,
    "sinceMember" DATETIME NOT NULL,
    "validThru" DATETIME NOT NULL,
    "limit" REAL NOT NULL,
    "expirationDay" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME,
    "status" INTEGER NOT NULL DEFAULT 1,
    "flagId" TEXT NOT NULL,
    CONSTRAINT "creditCards_flagId_fkey" FOREIGN KEY ("flagId") REFERENCES "flags" ("id") ON DELETE SET NULL ON UPDATE SET NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "creditCards_id_key" ON "creditCards"("id");
