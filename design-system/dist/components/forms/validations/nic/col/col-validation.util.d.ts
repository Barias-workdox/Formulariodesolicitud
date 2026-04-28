/**
 * Validate if Colombian "Número de Identificación Tributaria" (NIT) is valid.
 *
 * In some cases if user has active "verifik_col" flag,
 * this validation it will be used to validate "Cédula de Ciudadanía" (CC), "Cédula de Extranjería" (CE) & "Permiso Especial de Permanencia" (PEP).
 */
export declare const checkCOLNIT: (numberCol: string) => boolean;
