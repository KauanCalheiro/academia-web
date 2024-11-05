import { LOGOUT_ENDPOINT } from "~~/constants/api";
import { useZenithApi } from "~~/server/composables/useZenithApi";

export default defineEventHandler(async (event) => {
    const apiFetch = useZenithApi(event);

    return await apiFetch(LOGOUT_ENDPOINT, {
        method: 'POST',
        body: await readBody(event)
    });
});
