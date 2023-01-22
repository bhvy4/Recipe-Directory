import React, { useEffect, useState } from "react";
import RecipeList from "../../components/RecipeList";
import "./Home.css";
import { projectFirestore } from "../../firebase/config";

export default function Home() {
  const [data, setData] = useState('');
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setIsPending(true)
    projectFirestore.collection('recipes').get().then(snapshot => {
      if (snapshot.empty) {
        setIsPending(false)
        setError('there are no recipes')
      } else {
        let items = []
        snapshot.docs.forEach(item => {
          items.push({id : item.id, ...item.data()})
        })
        setData(items)
        setIsPending(false)
      }
    }).catch(err => {
      setError(err.message)
    })
  }, [])


  return (
    <div className="home">
      {isPending && <p className="loading"> loading... </p>}
      {error && <p className="error">{error}</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
