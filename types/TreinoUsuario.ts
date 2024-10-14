import type ExercicioTreino from "./ExercicioTreino"

export default interface TreinoUsuario {
    id: number
    descricao: string
    exercicios_treino: ExercicioTreino[][]
}
