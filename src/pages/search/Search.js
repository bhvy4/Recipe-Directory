import React from "react";
import { useLocation } from "react-router-dom";
import RecipeList from "../../components/RecipeList";
import { useFetch } from "../../hooks/useFetch";

//Styles
import "./Search.css";

export default function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const item = queryParams.get("q");
  const url = "http://localhost:3000/recipes/?q=" + item;
  const { data, error, isPending } = useFetch(url);


  return (
    <div>
      <h3 className="page-title">Recipes including: "{item}"</h3>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
