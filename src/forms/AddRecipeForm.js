import { React, useState } from 'react'

import Axios from 'axios'

import { useNavigate } from "react-router-dom";

import { v4 as uuid } from 'uuid';

import AddIngredient from './form_components/AddIngredient'
import Ingredient from './form_components/Ingredient';
import AddStep from './form_components/AddStep'
import Step from './form_components/Step'

import './Forms.css'
import { addRecipeNotification, missingFieldNotification } from '../snackbar/snackbarHelpers'

export default function AddRecipe({ showSnackbar }) {

  const [formInput, setFormInput] = useState({
    title: '',
    description: '',
    tags: [],
    image: '',
    ingredients: [],
    steps: []
  })

  const tags = ['Healthy', 'Quick and Easy', 'Showstopper', 'Veggie', 'Cheat day', 'One Pot Wonder', 'Midweek']

  const [isChecked, setIsChecked] = useState(new Array(tags.length).fill(false))

  const textChangeHandler = target => {
    const newFormInput = formInput
    newFormInput[target.name] = target.value
    setFormInput(newFormInput)
  }

  const checkboxChangeHandler = target => {
    const tag = target.value

    const newFormInput = { ...formInput }
    if (target.checked) {
      newFormInput.tags.push(tag)
    } else {
      newFormInput.tags = newFormInput.tags.filter(item => (item !== tag))
    }
    setFormInput(newFormInput)

    const index = tags.indexOf(tag)
    const newIsChecked = { ...isChecked }
    newIsChecked[index] = !newIsChecked[index]
    setIsChecked(newIsChecked)
  }

  const addFieldHandler = (input, inputType) => {
    const newFormInput = { ...formInput }
    newFormInput[inputType].push(input)
    setFormInput(newFormInput)
  }

  const removeStepHandler = (stepToRemove) => {
    const newFormInput = { ...formInput }
    newFormInput.steps = newFormInput.steps.filter(step => (step !== stepToRemove))
    setFormInput(newFormInput)
  }

  const removeIngredientHandler = (ingredientItemToRemove) => {
    const newFormInput = { ...formInput }
    newFormInput.ingredients = newFormInput.ingredients.filter(function (ingredient) { return ingredient.item !== ingredientItemToRemove })
    setFormInput(newFormInput)
  }

  const imageUploadHandler = target => {
    const newFormInput = { ...formInput }
    newFormInput.image = target.files[0]
    setFormInput(newFormInput)
  }

  const navigateTo = useNavigate()

  const formSubmitHandler = e => {
    e.preventDefault()
    if (validateInput(formInput)) {
      Axios.post('/recipe', formInput)
        .then(() => {
          showSnackbar(addRecipeNotification)
          navigateTo('/index')
        })
        .catch(err => {
          console.error(err)
        })
    }
  }


  const validateInput = form => {
    let isValid = true
    for (const field in form) {

      if (field === 'image') {
        break
      }

      if (!form[field]) {
        showSnackbar(missingFieldNotification)
        isValid = false
      }
      
    }
    return isValid
  }

  return (
    <form style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

      <label>
        recipe name
        <input name={'title'} onChange={e => textChangeHandler(e.target)} />
      </label>

      <label>
        description
        <textarea name={'description'} onChange={e => textChangeHandler(e.target)} />
      </label>

      {tags.map((tag, index) => {
        return (
          <label key={uuid()}>
            <input
              type="checkbox"
              value={tags[index]}
              checked={isChecked[index]}
              onChange={e => checkboxChangeHandler(e.target)}
            />{tag}
          </label>)
      })}

      <label>
        image
        <input
          id="file"
          type="file" 
          name="image" 
          accept="image/png, image/gif, image/jpeg" 
          onChange={e => imageUploadHandler(e.target)} />
      </label>

      <label>
        ingredients
        {formInput.ingredients.map((ingredient) => (
          <Ingredient ingredient={ingredient} removeIngredientHandler={removeIngredientHandler} key={uuid()} />
        ))}
        <AddIngredient addFieldHandler={addFieldHandler} />
      </label>

      <label>
        steps
        {formInput.steps.map((step) => (
          <Step step={step} removeStepHandler={removeStepHandler} key={uuid()} />
        ))}
        <AddStep addFieldHandler={addFieldHandler} />
      </label>

      <button type='submit' onClick={formSubmitHandler}>Submit form</button>
    </form>
  )
}
