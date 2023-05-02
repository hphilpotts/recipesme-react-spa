import React, { useState } from 'react'

import Axios from 'axios'

import { Box } from '@mui/material'

import RecipeOverview from './RecipeOverview'

import './RecipeIndex.css'

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
