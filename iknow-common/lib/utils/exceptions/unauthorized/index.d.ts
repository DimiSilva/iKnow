export = Unauthorized;
declare class Unauthorized extends Error {
    constructor(message: any);
    status: number;
}
