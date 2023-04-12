-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);
