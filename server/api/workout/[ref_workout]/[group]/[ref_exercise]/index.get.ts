import type { H3Event } from 'h3';
import { EXERCICIO_TREINO_GRUPO_ENDPOINT } from '~~/constants/api';
import useRequest from "~~/server/composables/useRequest";

export default defineEventHandler(async (event: H3Event) => {
    return useRequest(event, EXERCICIO_TREINO_GRUPO_ENDPOINT);
});
