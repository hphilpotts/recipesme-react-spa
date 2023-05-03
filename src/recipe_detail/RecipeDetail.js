import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import Axios from 'axios'

export default function RecipeDetail() {

  const [recipe, setRecipe] = useState([])

  const params = useParams()

  const getRecipeDetail = () => {
    Axios.get(`/recipes/${params.id}`)
      .then(res => {
        console.log(res.data)
        setRecipe(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }

  useEffect(() => {
    getRecipeDetail()
  }, [])

  return (
    <>
      <h1>{recipe.title}</h1>
      <h2>{recipe.description}</h2>
    </>
  )
}
