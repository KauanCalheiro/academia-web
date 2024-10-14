export default interface ZenithApiResponse<T = any> {
    success: boolean;
    message: string;
    payload: T;
    count: number;
    count_all: number;
}
