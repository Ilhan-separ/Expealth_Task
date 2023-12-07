let idCounter = 0;

export const generateUniqueId = (): string => {
  idCounter += 1;
  return idCounter.toString();
};
