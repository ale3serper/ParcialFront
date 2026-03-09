import { api } from "./axios";

export const getRandomCocktail = async () => {
  const response = await api.get(`random.php`);
  return response.data.drinks[0]
};