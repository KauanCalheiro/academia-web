export default interface Usuario {
    id: number
    nome: string
    cpf: string;
    telefone: string | number
    dt_nascimento: any // Date - "2004-05-04"
    email: string
    email_verified_at: string // Date - "2024-01-01 00:00:00"
    endereco: string
    genero: string
    ref_cidade: number
    remember_token?: string
    created_at?: any // Date;
    updated_at?: string // Date - "2024-01-01 00:00:00"
}
