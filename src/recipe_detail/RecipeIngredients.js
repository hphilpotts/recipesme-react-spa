import React from 'react'

export default function RecipeIngredients({ ingredients }) {

    // TODO proper key please
    const ingredientList = ingredients.map(item => (
        <li key={item._id}>{item.amount} {item.item}</li>
    ))

    return (
        <ul>
            {ingredientList}
        </ul>
    )
}
