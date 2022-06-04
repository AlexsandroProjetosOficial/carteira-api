-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_creditCards" (
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
INSERT INTO "new_creditCards" ("cardNumber", "createdAt", "creditCardName", "deletedAt", "expirationDay", "flagId", "id", "limit", "securityCode", "sinceMember", "status", "updatedAt", "validThru", "virtualAccountId") SELECT "cardNumber", "createdAt", "creditCardName", "deletedAt", "expirationDay", "flagId", "id", "limit", "securityCode", "sinceMember", "status", "updatedAt", "validThru", "virtualAccountId" FROM "creditCards";
DROP TABLE "creditCards";
ALTER TABLE "new_creditCards" RENAME TO "creditCards";
CREATE UNIQUE INDEX "creditCards_id_key" ON "creditCards"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
