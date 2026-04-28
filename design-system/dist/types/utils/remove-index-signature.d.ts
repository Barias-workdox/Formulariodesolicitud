/** Strips the index signature from a type, keeping only explicitly defined keys */
export type RemoveIndexSignature<T> = {
    [K in keyof T as string extends K ? never : number extends K ? never : symbol extends K ? never : K]: T[K];
};
