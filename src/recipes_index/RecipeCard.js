import React from 'react'

import { useNavigate } from "react-router-dom";

import { Paper } from '@mui/material'

import './RecipeIndex.css'

export default function RecipeCard(props) {

  const recipe = props.data
  const headlineIngredients = props.data.ingredients.slice(0, 3).map((item, key) => {
    return <li key={key}>{item.item}</li>
  })

  const navigateTo = useNavigate()

  const showRecipeDetail = () => {
    navigateTo(`/recipes/${recipe._id}`)
  } 

  return (
    <Paper elevation={3} className='recipe-overview-item' onClick={showRecipeDetail}>
      <h2>{recipe.title}</h2>
      <h5>{recipe.description}</h5>
      <h5>Headline Ingredients:</h5>
      <ul>
        {headlineIngredients}
      </ul>
    </Paper >
  )
}
