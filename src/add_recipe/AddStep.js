import React, { useState } from 'react'

export default function AddStep({ addFieldHandler }) {

    const [step, setStep] = useState('')

    const inputElement = document.getElementById('steps-input')

    const addButtonPress = e => {
        e.preventDefault()
        addFieldHandler(step, 'steps')
        setStep('')
        inputElement.value = ''
    }

    const submitOnEnterPress = e => {
        if (e.key === 'Enter') {
            addButtonPress(e)
        }
    }


    return (
        <div>
            <input id='steps-input' onChange={e => setStep(e.target.value)} onKeyDown={e => submitOnEnterPress(e)} />
            <button onClick={addButtonPress}>+</button>
        </div>
    )
}
