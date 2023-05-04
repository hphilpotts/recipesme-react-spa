import React from 'react'

export default function RecipeSteps({ steps }) {
    const stepList = steps.map(item => (
        <li key={item}>{item}</li>
    ))

    return (
        <ul>
            {stepList}
        </ul>
    )
}
