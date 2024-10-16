export const ZENITH_API_BASE_ENDPOINT = 'http://127.0.0.1:8000/api';

export const LOGIN_ENDPOINT = `${ZENITH_API_BASE_ENDPOINT}/login`;
export const LOGOUT_ENDPOINT = `${ZENITH_API_BASE_ENDPOINT}/logout`;
export const MODULE_ENDPOINT = `${ZENITH_API_BASE_ENDPOINT}/modulo`;

export const TREINOS_USUARIO_ENDPOINT = `${ZENITH_API_BASE_ENDPOINT}/usuario/{{id}}/treino`;
export const EXERCICIOS_TREINO_ENDPOINT = `${ZENITH_API_BASE_ENDPOINT}/exercicio_treino?ref_treino={{id}}&grupo={{group}}`;
