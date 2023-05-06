import React, { useState } from 'react'

export default function AddStep({ addFieldHandler }) {

    const [step, setStep] = useState('')


    const addButtonPress = e => {
        e.preventDefault()
        addFieldHandler(step, 'steps')
        setStep('')
        document.getElementById('steps-input').value = ''
    }


    return (
        <div>
            <input id='steps-input' onChange={e => setStep(e.target.value)} />
            <button onClick={addButtonPress}>+</button>
        </div>
    )
}
