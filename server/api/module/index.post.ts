import { MODULE_ENDPOINT } from "~~/constants/api";
import { useZenithApi } from "~~/server/composables/useZenithApi";

export default defineEventHandler(async (event) => {
    const apiFetch = useZenithApi(event);

    const body = await readBody(event);

    return await apiFetch(MODULE_ENDPOINT, {
        method: 'POST',
        body: body
    });
});
