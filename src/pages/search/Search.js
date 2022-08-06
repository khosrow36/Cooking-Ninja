import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import RecipeList from "../../compontents/RecipeList";

import "./Search.css";

export default function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("query");

  const url = "http://localhost:3000/recipes?q=" + query;

  const { data, isPending, error } = useFetch(url);

  return (
    <div>
      <h2 className="page-title">
        Recipes including <em>{query}</em>
        {error && <p className="error">error</p>}
        {isPending && <p className="loading">Loading...</p>}
        {data && <RecipeList recipes={data} />}
      </h2>
    </div>
  );
}
