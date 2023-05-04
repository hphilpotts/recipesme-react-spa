import React from 'react'

export default function RecipeIngredients({ingredients}) {

    // TODO proper key please
    const getIngredientList = ingredients.map(item => ( 
        <li key={item._id}>{item.amount} {item.item}</li>
    ))

    return (
        <ul>
            {getIngredientList}
        </ul>
    )
}
