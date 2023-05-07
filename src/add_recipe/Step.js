import React from 'react'

export default function Step({ step, index, removeFieldHandler }) {

    const removeStep = (e, step) => {
        e.preventDefault()
        removeFieldHandler(step, 'steps')
    }

    return (
        <div>
            <span>{step}     </span>
            <button onClick={e => removeStep(e, step)}>-</button>
        </div>
    )
}
