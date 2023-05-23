import React, { useEffect, useState } from 'react'

import { v4 as uuid } from 'uuid';

import { useParams, useNavigate } from 'react-router-dom'

import Axios from 'axios'

import RecipeIngredients from './RecipeIngredients'
import RecipeSteps from './RecipeSteps'
import ConfirmDelete from './ConfirmDelete';

import '../recipe_detail/Detail.css'

export default function RecipeDetail({ recipe, getRecipe }) {

  const [ingredients, setIngredients] = useState([])
  const [steps, setSteps] = useState([])
  const [confirmDeleteIsVisible, setConfirmDeleteIsVisible] = useState(false)

  const renderTags = (tags) => {
    if (tags) {
      return tags.map(tag => <span key={uuid()}>{tag}</span>)
    }
  }

  const params = useParams()

  useEffect(() => {
    Axios.get(`/recipes/${params.id}`)
      .then(res => {
        getRecipe(res.data)
        setIngredients(res.data.ingredients.map(item => item))
        setSteps(res.data.steps)
      })
      .catch(err => {
        console.error(err)
      })
  }, [params.id, getRecipe])

  const navigateTo = useNavigate()

  const loadUpdateRecipeForm = e => {
    e.preventDefault()
    navigateTo(`/update/${recipe._id}`)
  }

  const showConfirmDelete = e => {
    e.preventDefault()
    setConfirmDeleteIsVisible(true)
  }

  const hideConfirmDelete = e => {
    e.preventDefault()
    setConfirmDeleteIsVisible(false)
  }

  const deleteRecipe = e => {
    e.preventDefault()
    Axios.delete(`/recipes/${params.id}`)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.error(err);
      })
    navigateTo(`/index`)
  }

  return (
    <>
      <h1>{recipe.title}</h1>
      {/* TODO - add image here when functionality up and running! */}
      <h2>{recipe.description}</h2>
      <div id='tags' ><span id='tag-label'>Recipe tags:</span>{renderTags(recipe.tags)}</div>
      <div>
        <h3>Ingredients:</h3>
        <RecipeIngredients ingredients={ingredients} />
      </div>
      <div>
        <h3>Steps:</h3>
        <RecipeSteps steps={steps} />
      </div>
      <button onClick={e => loadUpdateRecipeForm(e)}>Edit</button>
      <button onClick={e => showConfirmDelete(e)} >Delete</button>
      {confirmDeleteIsVisible
        ?
        <ConfirmDelete hideConfirmDelete={hideConfirmDelete} deleteRecipe={deleteRecipe} />
        :
        null
      }
    </>
  )
}
