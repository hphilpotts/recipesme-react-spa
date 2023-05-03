import React, { useEffect, useState } from 'react'

import Axios from 'axios'

import { Box } from '@mui/material'

import RecipeCard from './RecipeCard'

import './RecipeIndex.css'

export default function Index() {

  const [recipes, setrecipes] = useState([])

  const getRecipes = () => {

    Axios.get('/recipes')
      .then(res => {
        console.log(res.data);
        setrecipes(res.data)
      })
      .catch(err => {
        console.error(err);
      })

  }

  useEffect(() => {
    getRecipes()
  }, [])

  const recipeIndex = recipes.map(
    recipe => (
      <RecipeCard data={recipe} key={recipe._id} />
    )
  )

  return (
    <Box className='index-container'>
      {recipeIndex}

      {/* hidden div ensures that bottom row of 2-item wide flex layout aligns to left if odd number of entries exist */}
      {(recipeIndex.length % 2 !== 0) ?
        <div className='recipe-overview-item hidden-overview-item'></div>
        :
        null
      }
    </Box>
  )
}
