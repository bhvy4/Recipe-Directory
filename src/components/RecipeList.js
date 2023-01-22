//Style
import "./RecipeList.css";
import closeIcon from '../assets/close_icon.svg'

//components
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { projectFirestore } from "../firebase/config";

export default function RecipeList({ recipes }) {

  const { mode } = useTheme();
  if (recipes.length === 0) {
    return <div className="error">No recipes to load...</div>;
  }

  const handleClick = (id) => {
    projectFirestore.collection('recipes').doc(id).delete()
  }
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h2>{recipe.title}</h2>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}> Cook This </Link>
          <img
            src={closeIcon}
            className='delete'
            onClick={() => handleClick(recipe.id)}
            alt="close icon" />
        </div>
      ))}
    </div>
  );
}
