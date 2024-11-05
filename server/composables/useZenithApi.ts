import type { H3Event } from 'h3';
import type { $Fetch, NitroFetchRequest } from 'nitropack';
import ZenithApiResponse from '~~/types/api/ZenithApiResponse';
import ZenithApi from '../services/api/ZenithApi';

export function useZenithApi<T>(event: H3Event, contentType: string = 'application/json'): $Fetch<ZenithApiResponse<T>, NitroFetchRequest> {
    const apiService = new ZenithApi<T>(event);
    return apiService.createFetch(event, contentType);
}
