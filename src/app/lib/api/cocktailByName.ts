import { api } from "./axios";

export const searchCocktailByName = async (name: string) => {
  const response = await api.get(`search.php?s=${name}`);
  return response
};