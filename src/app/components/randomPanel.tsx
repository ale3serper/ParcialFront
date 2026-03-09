import Link from "next/link";
import { Cocktailito } from "../type";
import "./randomPanel.css"






interface Props{
    cocktailrandom: Cocktailito
};


const RandomPanel=({cocktailrandom}: Props)=>{
    console.log(cocktailrandom);
    return(
    <div className="random-container">
     
   <Link href={`/cocktail/${cocktailrandom.idDrink}`}>
      <h1 className="random-title">{cocktailrandom.strDrink}</h1>

      <img
        src={cocktailrandom.strDrinkThumb}
        alt={cocktailrandom.strDrink}
        className="random-image"
      />
    
    </Link>
    </div>
    );

}


export default RandomPanel;