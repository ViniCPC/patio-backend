-- CreateTable
CREATE TABLE "CarrosPatio" (
    "id" TEXT NOT NULL,
    "propretario" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "multa" DECIMAL(65,30) NOT NULL,
    "placa" TEXT NOT NULL,
    "cpfCnpj" TEXT NOT NULL,
    "patio" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "rua" TEXT NOT NULL,

    CONSTRAINT "CarrosPatio_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CarrosPatio_placa_key" ON "CarrosPatio"("placa");

-- CreateIndex
CREATE UNIQUE INDEX "CarrosPatio_cpfCnpj_key" ON "CarrosPatio"("cpfCnpj");
