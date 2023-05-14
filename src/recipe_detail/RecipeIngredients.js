import React from 'react'

import { v4 as uuid } from 'uuid';

export default function RecipeIngredients({ ingredients }) {

    const ingredientList = ingredients.map(item => (
        <li key={uuid()}>{item.amount} {item.unit} {item.item}</li>
    ))

    return (
        <ul>
            {ingredientList}
        </ul>
    )
}
