export = Conflict;
declare class Conflict extends Error {
    constructor(message: any);
    status: number;
}
