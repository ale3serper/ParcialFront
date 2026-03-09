'use client'

import "./page.css";
import { useEffect, useState } from "react";
import Cocktail from "./components/cocktailCard";
import { searchCocktailByName } from "./lib/api/cocktailByName";
import { Cocktailito } from "./type";
import { getRandomCocktail } from "./lib/api/randomCocktail";
import RandomPanel from "./components/randomPanel";

const Home = () => {
  const [cocktails, setCocktails] = useState<Cocktailito[]>([]);
  const [cocktail, setCocktail] = useState<Cocktailito | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");
  const [inputName, setName] = useState<string>("");

  useEffect(() => {
    if (!search) {
      setCocktails([]);
      return;
    }

    setLoading(true);
    setError(null);

    searchCocktailByName(search)
      .then((e) => {
        setCocktails(e.data.drinks ?? []);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [search]);

   const randomCocktail =()=>{
    setLoading(true);
    setError(null);
    setCocktails([]);

    getRandomCocktail().then((e)=>setCocktail(e)).catch((err)=>{
      setError(err.message);

    }).finally(()=>{
        setLoading(false);
    });
  };

  return (
    <main className="container">
      <h1 className="main-title">
        Lista de Cocktails
      </h1>

      <div className="search-container">
  <input
    className="search-input"
    value={inputName}
    onChange={(e) => setName(e.target.value)}
  />
  <button
    className="search-button"
    onClick={() => setSearch(inputName)}
  >
    Buscar
  </button>

  <button className="botonRandom"
    onClick={()=>randomCocktail()}>Dime algo bonito</button>

  
</div>

      {error && <p>El error es: {error}</p>}
      {loading && <p>Cargando...</p>}

      <div className="grid">
        {cocktails.map((cocktail) => (
          <Cocktail
            key={cocktail.idDrink}
            cocktail={cocktail}
          />
        ))}
      </div>

      {cocktail && cocktails.length === 0  && (
        <div className="random cocktail">
          
            <RandomPanel key={cocktail.idDrink} cocktailrandom={cocktail} />
          
        </div>
      )}

    </main>
  );
};

export default Home;