import React, { useState } from 'react'

import Axios from 'axios'

import RecipeOverview from './RecipeOverview'

export default function Index() {

  const [recipeData, setRecipeData] = useState([])

  Axios.get('/recipes')
    .then(res => {
      setRecipeData(res.data)
    })
    .catch(err => {
      console.error(err);
    })

  const recipeIndex = recipeData.map(
    (recipe, index) => (
      <RecipeOverview data={recipe} key={index} />
    )
  )

  return (
    <>
      {recipeIndex}
    </>
  )
}
