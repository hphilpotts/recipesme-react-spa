import React, { useState } from 'react'

export default function AddStep({ addFieldHandler }) {

    const [step, setStep] = useState('')

    const addButtonPress = e => {
        e.preventDefault()
        addFieldHandler(step, 'steps')
    }


    return (
        <div>
            <input name={'item'} onChange={e => setStep(e.target.value)} />
            <button onClick={addButtonPress}>+</button>
        </div>
    )
}
