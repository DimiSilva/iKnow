export = Forbidden;
declare class Forbidden extends Error {
    constructor(message: any);
    status: number;
}
