import React from 'react'

export default function RecipeOverview(props) {

  const recipe = props.data
  const headlineIngredients = props.data.ingredients.slice(0, 3).map((item, key) => {
    return <li key={key}>{item.item}</li>
  })

  return (
    <div>
      <h2>{recipe.title}</h2>
      <h5>{recipe.description}</h5>
      <h5>Headline Ingredients:</h5>
      <ul>
        {headlineIngredients}
      </ul>
    </div>
  )
}
