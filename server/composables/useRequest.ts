import type { H3Event } from 'h3';
import { useZenithApi } from './useZenithApi';

export default async function useRequest(event: H3Event, endpoint: string) {
    const apiFetch = useZenithApi(event);
    return await apiFetch(endpoint, event);
}
