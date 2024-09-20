import ApiService from "~~/interfaces/ApiService";
import type { H3Event } from 'h3'
import type { $Fetch, NitroFetchRequest } from 'nitropack'

export default abstract class BaseApiService<T> implements ApiService<T> {
  protected baseUrl: string;
  
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  protected getAuthHeader(event: H3Event): string | null {
    const authHeader = getRequestHeader(event, 'Authorization');
    const authCookie = getCookie(event, 'auth.token');
    return authHeader ?? `Bearer ${authCookie}`;
  }

  createFetch(event: H3Event, contentType: string = 'application/json'): $Fetch<T, NitroFetchRequest> {
    return $fetch.create<T>({
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': contentType,
        'Accept': 'application/json',
      },
      onRequest: async ({ options }) => {
        const authorization = this.getAuthHeader(event);
        if (authorization) {
          const headers = options.headers || {};
          if (Array.isArray(headers)) {
            headers.push(['Authorization', authorization]);
          } else if (headers instanceof Headers) {
            headers.set('Authorization', authorization);
          } else {
            headers.Authorization = authorization;
          }
        }
      },
    });
  }
}
  