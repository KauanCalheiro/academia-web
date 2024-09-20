import type { H3Event } from 'h3';
import { RuntimeConfig } from "nuxt/schema";
import { ZENITH_API_BASE_ENDPOINT } from '~~/constants/api';
import BaseApiService from "./BaseApiService";

export default class ZenithApi<T> extends BaseApiService<T> {
    protected config: RuntimeConfig;

    constructor(event: H3Event) {
        // super(useRuntimeConfig(event).zenithApiUrl);
        super(ZENITH_API_BASE_ENDPOINT);
        this.config = useRuntimeConfig(event);
    }

    protected getAuthHeader(event: H3Event): string | null {
        // return getRequestHeader(event, 'Authorization') ?? `Bearer ${this.config.zenithApiToken}`;
        return getRequestHeader(event, 'Authorization') ?? '';
    }
}
