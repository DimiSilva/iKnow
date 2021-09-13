export = InvalidOperation;
declare class InvalidOperation extends Error {
    constructor(message: any);
    status: number;
}
