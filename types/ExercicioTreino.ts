import type Exercicio from "./Exercicio"

export default interface ExercicioTreino {
    id: number
    ref_exercicio: number
    ref_treino: number
    grupo: string
    num_series: number
    num_repeticoes: number
    carga: number
    observacao: string
    exercicio: Exercicio
}
