import { useRef, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import "./Create.css";

export default function Create() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [method, setMethod] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null)
  const {data,postData,isPending} = useFetch("http://localhost:3000/recipes","POST")

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({
      title : title,
      ingredients: ingredients,
      method : method,
      cookingTime : time + ' minutes'
    })
  };

  const handleAdd = (e) => {
    e.preventDefault();

    const ing = newIngredient.trim();
    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredients) => [...prevIngredients, ing]);
    }
    setNewIngredient("")
    ingredientInput.current.focus();
  };

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title: </span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>
        <label>
          <span>New Ingredient:</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref = {ingredientInput}
            />
            <button className="btn" onClick={handleAdd} value>
              add
            </button>
          </div>
        </label>
          <p>Ingredients:{ ingredients.map(i => <em key={i}>{i}, </em>) }</p>
        <label>
          <span>Recipe method:</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>
        <label>
          <span>Cooking Time:</span>
          <input
            type="number"
            onChange={(e) => setTime(e.target.value)}
            required
            value={time}
          />
        </label>
        <button className="btn">submit</button>
      </form>
    </div>
  );
}
