import React from 'react'

export default function Ingredient({ ingredient, removeIngredientHandler }) {

    const removeIngredient = (e, ingredient) => {
        e.preventDefault()
        removeIngredientHandler(ingredient.item)
    }

    return (
        <div>
            <span>{ingredient.amount}{ingredient.item}     </span>
            <button onClick={e => removeIngredient(e, ingredient)}>-</button>
        </div>
    )
}
