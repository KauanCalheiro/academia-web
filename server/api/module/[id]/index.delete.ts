import { MODULE_ENDPOINT } from "~~/constants/api";
import { useZenithApi } from "~~/server/composables/useProtocolosApi";

export default defineEventHandler(async (event) => {
    const apiFetch = useZenithApi(event);

    const id = getRouterParam(event, 'id');

    return await apiFetch(`${MODULE_ENDPOINT}/${id}`, {
        method: 'DELETE',
    });
});
