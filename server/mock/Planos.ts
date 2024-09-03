import Plano from "~~/types/Plano";

const mockedDataPlanos: Plano[] = [
    {
        id: 1,
        descricao: "Plano em Dupla",
        valor: 119.90,
        parcelas: 12,
        obs: "por pessoa",
        imagePath: "https://www.academiazenith.com.br/images/37ecf4ee6508e8e1cab7b8aff99e0951.jpg"
    },
    {
        id: 2,
        descricao: "Plano Individual",
        valor: 139.90,
        parcelas: 12,
        obs: "",
        imagePath: "https://www.academiazenith.com.br/images/37ecf4ee6508e8e1cab7b8aff99e0951.jpg"
    },
    {
        id: 3,
        descricao: "Diaria",
        valor: 30.90,
        parcelas: 1,
        obs: "",
        imagePath: "https://www.academiazenith.com.br/images/37ecf4ee6508e8e1cab7b8aff99e0951.jpg"
    }
];

export default mockedDataPlanos;
