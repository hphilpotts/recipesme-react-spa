import React from 'react'

import { v4 as uuid } from 'uuid';

export default function RecipeSteps({ steps }) {
    const stepList = steps.map(item => (
        <li key={uuid()}>{item}</li>
    ))

    return (
        <ul>
            {stepList}
        </ul>
    )
}
