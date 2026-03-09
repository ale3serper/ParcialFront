"use client"
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getCocktailById } from "@/app/lib/api/cocktailById";
import { Cocktailito } from "@/app/type";
import "./page.css"


const CocktailDetail = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState<Cocktailito | null>(null);

  useEffect(() => {
    getCocktailById(String(id))
      .then((e) => {
        const cocktailData = e.data.drinks;
        if (cocktailData && cocktailData.length > 0) {
          setCocktail(cocktailData[0]);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!cocktail) return <p>Cargando cocktail...</p>;

  return (
    <div className="detail-container">
      <Link href="/">
        Volver al inicio
      </Link>

      <h1 className="detail-title">{cocktail.strDrink}</h1>

      <img
        src={cocktail.strDrinkThumb}
        alt={cocktail.strDrink}
        className="detail-image"
      />
      <p className="detail-categoria">Categoría: {cocktail.strCategory}</p>
      <p className="detail-alcoholico">Alcoholico o no : {cocktail.strAlcoholic}</p>
      <p className="detail-vaso">Vaso: {cocktail.strGlass}</p>
      <p className="detail-text">Instrucciones: {cocktail.strInstructions}</p>
      <h3 className="detail-ingerdientes">Ingredientes: </h3>
          {cocktail.strIngredient1 && <p>{cocktail.strIngredient1}</p>}
          {cocktail.strIngredient2 && <p>{cocktail.strIngredient2}</p>}
          {cocktail.strIngredient3 && <p>{cocktail.strIngredient3}</p>}
          {cocktail.strIngredient4 && <p>{cocktail.strIngredient4}</p>}
          {cocktail.strIngredient5 && <p>{cocktail.strIngredient5}</p>}
          {cocktail.strIngredient6 && <p>{cocktail.strIngredient6}</p>}
          {cocktail.strIngredient7 && <p>{cocktail.strIngredient7}</p>}
          {cocktail.strIngredient8 && <p>{cocktail.strIngredient8}</p>}
          {cocktail.strIngredient9 && <p>{cocktail.strIngredient9}</p>}
          {cocktail.strIngredient10 && <p>{cocktail.strIngredient10}</p>}
          {cocktail.strIngredient11 && <p>{cocktail.strIngredient11}</p>}
          {cocktail.strIngredient12 && <p>{cocktail.strIngredient12}</p>}
          {cocktail.strIngredient13 && <p>{cocktail.strIngredient13}</p>}
          {cocktail.strIngredient14 && <p>{cocktail.strIngredient14}</p>}
          {cocktail.strIngredient15 && <p>{cocktail.strIngredient15}</p>}
        
    </div>
  );
};

export default CocktailDetail;