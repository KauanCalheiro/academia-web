import { LOGIN_ENDPOINT } from "~~/constants/api";
import { useZenithApi } from "~~/server/composables/useProtocolosApi";

export default defineEventHandler(async (event) => {
    const apiFetch = useZenithApi(event);

    return await apiFetch(LOGIN_ENDPOINT, {
        method: 'POST',
        body: await readBody(event)
    });
});
