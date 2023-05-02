import React from 'react'

import { Paper } from '@mui/material'

import './RecipeIndex.css'

export default function RecipeOverview(props) {

  const recipe = props.data
  const headlineIngredients = props.data.ingredients.slice(0, 3).map((item, key) => {
    return <li key={key}>{item.item}</li>
  })

  return (
    <Paper elevation={3} className='recipe-overview-item'>
      <h2>{recipe.title}</h2>
      <h5>{recipe.description}</h5>
      <h5>Headline Ingredients:</h5>
      <ul>
        {headlineIngredients}
      </ul>
    </Paper >
  )
}
