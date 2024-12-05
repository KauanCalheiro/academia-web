import type { H3Event } from 'h3';
import { EXERCICIO_HISTORICO_ENDPOINT } from '~~/constants/api';
import { useZenithApi } from '~~/server/composables/useZenithApi';

export default defineEventHandler(async (event: H3Event) => {
    const apiFetch = useZenithApi(event);

    return await apiFetch(EXERCICIO_HISTORICO_ENDPOINT, {
        method: 'GET',
        query: await getQuery(event)
    });
});
