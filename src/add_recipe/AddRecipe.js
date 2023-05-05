import { React, useState } from 'react'

import './AddRecipe.css'

export default function Add() {

  const [formInput, setFormInput] = useState({
    title: '',
    description: '',
    tags: '',
    image: '',
    ingredients: '',
    steps:''
  })

  const formChangeHandler = target => {
    const newFormInput = formInput
    newFormInput[target.name] = target.value
    setFormInput(newFormInput)
  }

  return (
    <form style={{ display:"flex", flexDirection:"column", alignItems:"center"}}>
      <label>
        recipe name
        <input name={'title'} onChange={e => formChangeHandler(e.target)}/>
      </label>
      <label>
        description
        <input name={'description'} onChange={e => formChangeHandler(e.target)}/>
      </label>
      <label>
        tags
        <input name={'tags'} onChange={e => formChangeHandler(e.target)}/>
      </label>
      <label>
        image
        <input name={'image'} onChange={e => formChangeHandler(e.target)}/>
      </label>
      <label>
        ingredients
        <input name={'ingredients'} onChange={e => formChangeHandler(e.target)}/>
      </label>
      <label>
        steps
        <input name={'steps'} onChange={e => formChangeHandler(e.target)}/>
      </label>
    </form>
  )
}
