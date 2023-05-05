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

  const formSubmitHandler = e => {
    e.preventDefault()
    if (validateInput(formInput)) {
      // TODO : Axios POST request below instead of logs once correct inpuy field types have been set up
        // Along the lines of:

        /* 
        Axios.post('/recipe', formInput)
          .then(res => {
            [...]
          })
          .catch(err => {
            console.err(err)
          })
        */

      console.log('saving the below form:')
      console.log(formInput)
    }

  }

  // ? could this instead be achieved with (for e.g.) `<input name="title" [...] required />` ?
  const validateInput = form => { 
    let isValid = true
    for (const field in form) {
      if (!form[field]) {
        console.warn(`The ${field} field is empty! Please try again!`)
        isValid = false
      } 
    }
    return isValid
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
        <button type='submit' onClick={formSubmitHandler}>Submit form</button>
    </form>
  )
}
