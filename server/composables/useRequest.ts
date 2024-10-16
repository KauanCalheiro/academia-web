import type { H3Event } from 'h3';
import { useZenithApi } from './useZenithApi';

export default async function useRequest(event: H3Event, endpoint: string) {
    const apiFetch = useZenithApi(event);

    const endpointRegex = /{{(.*?)}}/g;
    const arrayReplaces = endpoint.match(endpointRegex);

    const query = event.context.params;

    if (arrayReplaces) {
        for (const replace of arrayReplaces) {
            const cleanReplace = replace.replace('{{', '').replace('}}', '');
            if (!query?.hasOwnProperty(cleanReplace)) {
                throw new Error(`Missing query parameter ${cleanReplace}`);
            }
            endpoint = endpoint.replace(replace, (query[cleanReplace] as string));
        }
    }

    return await apiFetch(endpoint, event);
}
