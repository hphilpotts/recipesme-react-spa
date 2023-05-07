import React from 'react'

export default function Step({ step, removeStepHandler }) {

    const removeStep = (e, step) => {
        e.preventDefault()
        removeStepHandler(step)
    }

    return (
        <div>
            <span>{step}     </span>
            <button onClick={e => removeStep(e, step)}>-</button>
        </div>
    )
}
