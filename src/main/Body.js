import React, { useState } from 'react'

import { Routes, Route } from 'react-router-dom'

import Homepage from '../home/Homepage'
import RecipeIndex from '../recipes_index/RecipeIndex'
import RecipeDetail from '../recipe_detail/RecipeDetail'
import AddRecipe from '../forms/AddRecipeForm'
import EditRecipe from '../forms/UpdateRecipeForm'

import './Main.css'

export default function Body({ isInDetailView, showNotification }) {

  const [currentRecipe, setCurrentRecipe] = useState({})

  const getRecipe = recipeData => {
    setCurrentRecipe(recipeData)
  }

  return (
    <div className='app-body'>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='index' element={<RecipeIndex isInDetailView={isInDetailView} />}></Route>
        <Route path='recipes/:id' element={<RecipeDetail recipe={currentRecipe} getRecipe={getRecipe} />}></Route>
        <Route path='add' element={<AddRecipe showNotification={showNotification} />}></Route>
        <Route path='update/:id' element={<EditRecipe recipe={currentRecipe} getRecipe={getRecipe} showNotification={showNotification}/>}></Route>
      </Routes>
    </div>
  )
}
