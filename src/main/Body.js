import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Homepage from '../home/Homepage'
import RecipeIndex from '../recipes_index/RecipeIndex'
import RecipeDetail from '../recipe_detail/RecipeDetail'
import Add from '../add_recipe/AddRecipe'

import './Main.css'

export default function Body() {
  return (
    <div className='app-body'>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='index' element={<RecipeIndex/>}></Route>
        <Route path='recipes/:id' element={<RecipeDetail/>}></Route>
        <Route path='add' element={<Add/>}></Route>
      </Routes>
    </div>
  )
}
