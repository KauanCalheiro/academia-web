import type { H3Event } from 'h3'
import type { $Fetch, NitroFetchRequest } from 'nitropack'

export default interface ApiService<T> {
    createFetch(event: H3Event, contentType?: string): $Fetch<T, NitroFetchRequest>;
}
  