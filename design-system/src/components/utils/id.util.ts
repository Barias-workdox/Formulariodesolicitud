import { nanoid } from 'nanoid';

/** Used for temporal local variables before they are resolved by the api endpoint. */
export const TEMP_PREFIX = 'temp_';

/** Used to create a unique id for frontend purposes */
export const getUniqueId = (prefix = TEMP_PREFIX): string => `${prefix}_${nanoid()}`;

/** Used to check if some id is marked as temporal with a temporal prefix */
export const checkIsTempId = (id: string, prefix = TEMP_PREFIX): boolean => id.includes(prefix);
