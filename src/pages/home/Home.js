import React from "react";
import RecipeList from "../../components/RecipeList";
import { useFetch } from "../../hooks/useFetch";
import "./Home.css";

export default function Home() {
  const {
    data,
    isPending,
    error,
  } = useFetch("http://localhost:3000/recipes");
  return (
    <div className="home">
      {isPending && <p className="loading"> loading... </p>}
      {error && <p className="error">{error}</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
