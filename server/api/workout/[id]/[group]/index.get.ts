import type { H3Event } from 'h3';
import { EXERCICIOS_TREINO_ENDPOINT } from '~~/constants/api';
import useRequest from "~~/server/composables/useRequest";

export default defineEventHandler(async (event: H3Event) => {
    return useRequest(event, EXERCICIOS_TREINO_ENDPOINT);
});
