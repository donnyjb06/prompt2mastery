-- CreateTable
CREATE TABLE "IPAddress" (
    "id" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "hasUsedDemo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "IPAddress_pkey" PRIMARY KEY ("id")
);
