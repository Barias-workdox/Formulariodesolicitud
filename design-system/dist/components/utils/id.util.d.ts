/** Used for temporal local variables before they are resolved by the api endpoint. */
export declare const TEMP_PREFIX = "temp_";
/** Used to create a unique id for frontend purposes */
export declare const getUniqueId: (prefix?: string) => string;
/** Used to check if some id is marked as temporal with a temporal prefix */
export declare const checkIsTempId: (id: string, prefix?: string) => boolean;
