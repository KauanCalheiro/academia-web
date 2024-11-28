import type { H3Event } from 'h3';
import { EXERCICIO_HISTORICO_ENDPOINT } from '~~/constants/api';
import useRequest from "~~/server/composables/useRequest";

export default defineEventHandler(async (event: H3Event) => {
    return useRequest(event, EXERCICIO_HISTORICO_ENDPOINT);
});
