import Plano from "~~/types/Plano";

const mockedDataPlanos: Plano[] = [
    {
        id: 13,
        titulo: "Plano em Dupla",
        descricao: "<li>2 pessoas</li><li>12x de R$ 119,90</li><li>Valor por pessoa</li>",
        valor_mensal: 119.90,
        periodo: "Mês"
    },
    {
        id: 14,
        titulo: "Plano Individual",
        descricao: "<li>1 pessoas</li><li>12x de R$ 119,90</li><br>",
        valor_mensal: 139.90,
        periodo: "Mês"
    },
    {
        id: 9,
        titulo: "Diaria",
        descricao: "<li>1 pessoas</li><li>12x de R$ 119,90</li><br>",
        valor_mensal: 30.0,
        periodo: "Dia"
    }
];

export default mockedDataPlanos;
