type FetchRequest = RequestInfo;

interface FetchResponse<T> extends Response {
    _data: T;
}

export default interface FetchContext<T = any> {
    request: FetchRequest;
    response: FetchResponse<T>;
    error?: Error;
}
