import React, { useEffect, useState } from 'react'

import { v4 as uuid } from 'uuid';

import { useParams, useNavigate } from 'react-router-dom'

import Axios from 'axios'

import RecipeIngredients from './RecipeIngredients'
import RecipeSteps from './RecipeSteps'

export default function RecipeDetail() {

  const [recipe, setRecipe] = useState([])
  const [ingredients, setIngredients] = useState([])
  const [steps, setSteps] = useState([])

  const renderTags = (tags) => {
    if (tags) {
      return tags.map(tag => <span key={uuid()}>{tag}</span>)
    }
  }

  const params = useParams()

  useEffect(() => {
    Axios.get(`/recipes/${params.id}`)
      .then(res => {
        setRecipe(res.data)
        setIngredients(res.data.ingredients.map(item => item))
        setSteps(res.data.steps)
      })
      .catch(err => {
        console.error(err)
      })
  }, [params.id])

  const navigateTo = useNavigate()

  const loadUpdateRecipeForm = e => {
    e.preventDefault()
    navigateTo(`/update/${recipe._id}`)
  }

  return (
    <>
      <h1>{recipe.title}</h1>
      {/* TODO - add image here when functionality up and running! */}
      <h2>{recipe.description}</h2>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}><span style={{ fontWeight: "bold" }}>Recipe tags:</span>{renderTags(recipe.tags)}</div>
      <div>
        <h3>Ingredients:</h3>
        <RecipeIngredients ingredients={ingredients} />
      </div>
      <div>
        <h3>Steps:</h3>
        <RecipeSteps steps={steps} />
      </div>
      <button onClick={e => loadUpdateRecipeForm(e)}>Edit</button>
      {/* <button>Delete</button> */}
    </>
  )
}
