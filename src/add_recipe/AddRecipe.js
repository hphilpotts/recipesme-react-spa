import { React, useState } from 'react'

import AddIngredient from './AddIngredient'
import AddStep from './AddStep'

import './AddRecipe.css'

export default function Add() {

  const [formInput, setFormInput] = useState({
    title: '',
    description: '',
    tags: [],
    image: '',
    ingredients: [],
    steps: []
  })

  const formChangeHandler = target => {
    const newFormInput = { ...formInput }

    // ? would this be better as separate functions for checkbox and text ?
    if (target.type === 'checkbox') {
      target.checked ? newFormInput.tags.push(target.value) : newFormInput.tags = newFormInput.tags.filter(item => (item !== target.value))
    } else {
      newFormInput[target.name] = target.value
    }

    setFormInput(newFormInput)
  }

  const addFieldHandler = (input, inputType) => {
    if (!input) {
      console.warn('input is empty!');
    } else {
      const newFormInput = { ...formInput }
      newFormInput[inputType].push(input)
      setFormInput(newFormInput)
    }

  }

  const imageUploadHandler = target => {
    const newFormInput = { ...formInput }
    newFormInput.image = target.files[0]
    setFormInput(newFormInput)
  }

  const formSubmitHandler = e => {
    e.preventDefault()
    if (validateInput(formInput)) {
      // TODO : Axios POST request below instead of logs once correct input field types have been set up
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
        // TODO : uncomment once form input implementation completed and tested
        // isValid = false
      }
    }
    return isValid
  }

  const tags = ['Healthy', 'Quick and Easy', 'Showstopper', 'Veggie', 'Cheat day', 'One Pot Wonder', 'Midweek']

  return (
    <form style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <label>
        recipe name
        <input name={'title'} onChange={e => formChangeHandler(e.target)} />
      </label>
      <label>
        description
        <textarea name={'description'} onChange={e => formChangeHandler(e.target)} />
      </label>
      {tags.map((tag, index) => {
        return (
          <label key={index}>
            <input
              type="checkbox"
              value={tags[index]}
              onChange={e => formChangeHandler(e.target)}
            />{tag}
          </label>)
      })
      }
      <label>
        image
        <input id="file" type="file" name="image" accept="image/png, image/gif, image/jpeg" onChange={e => imageUploadHandler(e.target)} />
      </label>

      <label>
        ingredients
        <AddIngredient addFieldHandler={addFieldHandler} />
      </label>
      <label>
        steps
        {formInput.steps.map((step, index) => {
          return <p key={`step ${index}`}>{step}</p>
        })}
        <AddStep addFieldHandler={addFieldHandler} />
      </label>
      <button type='submit' onClick={formSubmitHandler}>Submit form</button>
    </form>
  )
}
