/**
 * Validate if a Peruvian "Registro Único de Contribuyente" (RUC) is valid.
 */
export const checkPERRUC = (ruc: string): boolean => {
  const rucClean = Number(ruc.replace(/[-.,[\]()\s]+/g, ''));

  // 11 digits. It starts with 10,15,16,17 or 20.
  return (
    ((rucClean >= 1e10 && rucClean < 11e9) ||
      (rucClean >= 15e9 && rucClean < 18e9) ||
      (rucClean >= 2e10 && rucClean < 21e9)) &&
    rucClean.toString().length === 11
  );
};
