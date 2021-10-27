export = NotFound;
declare class NotFound extends Error {
    constructor(message: any);
    status: number;
}
