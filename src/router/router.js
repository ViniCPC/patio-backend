    import { Router } from "express";
    import prisma from "../connection/db.js";

    const router = Router();

    router.get("/veiculos/buscar", async (req, res) => {
        try {
        const { query } = req.query; // pode ser placa ou cpf

        if (!query) {
      return res.status(400).json({ error: "Parâmetro 'query' é obrigatório" });
    }

    const veiculo = await prisma.carrosPatio.findFirst({
      where: {
        OR: [
          { placa: query },
          { cpfCnpj: query },
        ],
      },
    });

    if (!veiculo) {
      return res.status(404).json({ error: "Veículo não encontrado" });
    }

    return res.json(veiculo);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao buscar veículo" });
  }
});

export default router;