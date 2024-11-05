import { TREINOS_USUARIO_ENDPOINT } from "~~/constants/api";
import useRequest from "~~/server/composables/useRequest";

export default defineEventHandler(async (event) => {
    // const apiFetch = useZenithApi(event);

    // const query = getQuery(event);

    // return await apiFetch(TREINOS_USUARIO_ENDPOINT, {
    //     method: 'GET',
    //     query: query
    // });
    return useRequest(event, TREINOS_USUARIO_ENDPOINT);
});
