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
        setIngredient({ item: '', amount: 0 })

        const amountInput = document.getElementById('amount-input')
        const itemInput = document.getElementById('item-input')

        amountInput.value = ''
        itemInput.value = ''
        amountInput.select()
    }

    const submitOnEnterPress = e => {
        if (e.key === 'Enter') {
            addButtonPress(e)
        }
    }

    return (
        <div>
            <label>
                quantity
                <input id='amount-input' name={'amount'} onChange={e => ingredientChangeHandler(e.target)} />
            </label>
            <label>
                ingredient
                <input id='item-input' name={'item'} onChange={e => ingredientChangeHandler(e.target)} onKeyDown={e => submitOnEnterPress(e)} />
            </label>
            <button onClick={addButtonPress}>+</button>
        </div>
    )
}
