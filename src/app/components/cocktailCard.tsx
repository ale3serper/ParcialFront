import Link from "next/link";
import "./cocktailCard.css"

import { Cocktailito } from "../type";

interface Props {
  cocktail: Cocktailito;
}

const  Cocktail=({ cocktail }: Props)=> {
  return (
    <Link href={`/cocktail/${cocktail.idDrink}`}>
      <div className="card">
        <img
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
        />
        <h2>{cocktail.strDrink}</h2>
      </div>
    </Link>
  );
}

export default Cocktail;