import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { projectFirestore } from "../../firebase/config";
import { useTheme } from "../../hooks/useTheme";

import "./Recipe.css";

export default function Recipe() {
  const { id } = useParams();
  const {mode} = useTheme();
  const [recipe, setRecipe] = useState('');
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const handleClick = ()=>{
    projectFirestore.collection('recipes').doc(id).update({
      title : 'title is changed now'
    })
  }

  useEffect(() => {
    setIsPending(true);
    const stopListen = projectFirestore.collection('recipes').doc(id).onSnapshot(doc => {
      if(doc.exists){
        setIsPending(false)
        setRecipe(doc.data())
        
      } else {
       setError('could not fetch the data')
        setIsPending(false)
      }
    })

    return ()=>stopListen()
  }, [id])
  

  return (
    <div className={`recipe ${mode}`}>
      {isPending && <p className="loading">loading...</p>}
      {error && <p className="error">{error}</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>{recipe.cookingTime} to make.</p>
          <ul>{recipe.ingredients.map(ing => <li key={ing}>{ing}</li> )}</ul>
          <p className="method">{recipe.method}</p>
          <button onClick={handleClick}>update</button>
        </>
      )}
    </div>
  );
}
