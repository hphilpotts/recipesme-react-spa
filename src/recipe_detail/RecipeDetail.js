import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import Axios from 'axios'

import RecipeIngredients from './RecipeIngredients'

export default function RecipeDetail() {

  const [recipe, setRecipe] = useState([])
  const [ingredients, setIngredients] = useState([])

  const params = useParams()


  useEffect(() => {
      Axios.get(`/recipes/${params.id}`)
        .then(res => {
          console.log(res.data)
          setRecipe(res.data)
          setIngredients(res.data.ingredients.map(item => item))
        })
        .catch(err => {
          console.error(err)
        })
  }, [params.id])

  return (
    <>
      <h1>{recipe.title}</h1>
      <h2>{recipe.description}</h2>
      <div>
        <h3>Ingredients:</h3>
        <RecipeIngredients ingredients={ingredients}></RecipeIngredients>
      </div>
      <div>
        <h3>Steps:</h3>
      </div>
    </>
  )
}
