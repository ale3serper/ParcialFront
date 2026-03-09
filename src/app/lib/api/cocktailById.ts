import { api } from "./axios";

export const getCocktailById =  (id: string) => {
  const response =  api.get(`lookup.php?i=${id}`);
  return response;
};