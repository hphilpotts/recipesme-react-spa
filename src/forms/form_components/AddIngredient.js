import React, { useState } from 'react'

export default function AddIngredient({ addFieldHandler }) {

    const [ingredient, setIngredient] = useState({ amount: '', item: '' })

    const ingredientChangeHandler = target => {
        const updatedIngredient = ingredient
        updatedIngredient[target.name] = target.value
        setIngredient(updatedIngredient)
    }


    const addButtonPress = e => {
        e.preventDefault()

        if (!ingredient.amount || !ingredient.item) {
            console.warn('quantity or name is missing');
        } else {
            addFieldHandler(ingredient, 'ingredients')
            setIngredient({ amount: '', item: '' })

            document.getElementById('item-input').value = ''
            const amountInput = document.getElementById('amount-input')
            amountInput.value = ''
            amountInput.select()
        }

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
                <input id='amount-input' name={'amount'} onChange={e => ingredientChangeHandler(e.target)} onKeyDown={e => submitOnEnterPress(e)} />
            </label>
            <label>
                ingredient
                <input id='item-input' name={'item'} onChange={e => ingredientChangeHandler(e.target)} onKeyDown={e => submitOnEnterPress(e)} />
            </label>
            <button onClick={addButtonPress}>+</button>
        </div>
    )
}
