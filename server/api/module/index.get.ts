import { MODULE_ENDPOINT } from "~~/constants/api";
import { useZenithApi } from "~~/server/composables/useZenithApi";

export default defineEventHandler(async (event) => {
    const apiFetch = useZenithApi(event);

    const query = getQuery(event);

    return await apiFetch(MODULE_ENDPOINT, {
        method: 'GET',
        query: query
    });
});
