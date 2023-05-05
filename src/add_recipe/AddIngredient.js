import React, { useState } from 'react'

export default function AddIngredient({ addFieldHandler }) {

  const [ingredient, setIngredient] = useState({
    item: '',
    amount: 0
  })

  const ingredientChangeHandler = target => {
    const updatedIngredient = ingredient
    updatedIngredient[target.name] = target.value
    setIngredient(updatedIngredient)
  }

  const addButtonPress = e => {
    e.preventDefault()
    addFieldHandler(ingredient, 'ingredients')
  }

  return (
    <div>
        <label>
            quantity
            <input name={'amount'} onChange={e => ingredientChangeHandler(e.target)} />
        </label>
        <label>
            ingredient
            <input name={'item'} onChange={e => ingredientChangeHandler(e.target)} />
        </label>
        <button onClick={addButtonPress}>+</button>
    </div>
  )
}
