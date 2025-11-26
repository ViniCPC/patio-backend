import prisma from "../connection/db.js";

  export const allCars = async (req, res) => {
        try {
        const informacoes = await prisma.carrosPatio.findMany();
        res.json(informacoes);
        console.log(informacoes);
    } catch (err) {
        res.status(500).json({err: "Erro ao buscar informaçãoes sobre o carro"})
    }
  }


  const vei = await prisma.carrosPatio.findMany(); 
  console.log(vei);