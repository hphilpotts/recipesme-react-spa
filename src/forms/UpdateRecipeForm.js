import { React, useState, useEffect } from 'react'

import Axios from 'axios'

import { useParams, useNavigate } from "react-router-dom";

import { v4 as uuid } from 'uuid';

import AddIngredient from './form_components/AddIngredient'
import Ingredient from './form_components/Ingredient';
import AddStep from './form_components/AddStep'
import Step from './form_components/Step'

import '../forms/Forms.css'

export default function EditRecipe({ recipe }) {

  const [fieldsToUpdate, setFieldsToUpdate] = useState({})

  const params = useParams()

  const tags = ['Healthy', 'Quick and Easy', 'Showstopper', 'Veggie', 'Cheat day', 'One Pot Wonder', 'Midweek', 'Bulk']

  const defaultTags = tags.map(tag => {
    console.log(tag);
    console.log(recipe.tags[1])
    console.log(tag === recipe.tags[1]);
    if (recipe.tags.includes(tag)) {
      return true
    } else {
      return false
    }
  })

  console.log(defaultTags);

  const [isChecked, setIsChecked] = useState(defaultTags)

  const textChangeHandler = target => {
    const newFieldsToUpdate = fieldsToUpdate
    newFieldsToUpdate[target.name] = target.value
    setFieldsToUpdate(newFieldsToUpdate)
  }

  const checkboxChangeHandler = target => {
    const tag = target.value

    const newFieldsToUpdate = { ...fieldsToUpdate }

    if (!newFieldsToUpdate.tags) {
      newFieldsToUpdate.tags = recipe.tags
    }

    if (target.checked) {
      newFieldsToUpdate.tags.push(tag)
    } else {
      newFieldsToUpdate.tags = newFieldsToUpdate.tags.filter(item => (item !== tag))
    }

    setFieldsToUpdate(newFieldsToUpdate)

    const index = tags.indexOf(tag)
    const newIsChecked = { ...isChecked }
    newIsChecked[index] = !newIsChecked[index]
    setIsChecked(newIsChecked)
  }

  const addFieldHandler = (input, inputType) => {
    const newFieldsToUpdate = { ...fieldsToUpdate }
    if (!newFieldsToUpdate[inputType]) {
      newFieldsToUpdate[inputType] = recipe[inputType]
    }
    newFieldsToUpdate[inputType].push(input)
    setFieldsToUpdate(newFieldsToUpdate)
  }

  const removeStepHandler = (stepToRemove) => {
    const newFieldsToUpdate = { ...fieldsToUpdate }
    if (!newFieldsToUpdate.steps) {
      newFieldsToUpdate.steps = recipe.steps
    }
    newFieldsToUpdate.steps = newFieldsToUpdate.steps.filter(step => (step !== stepToRemove))
    setFieldsToUpdate(newFieldsToUpdate)
  }

  const removeIngredientHandler = (ingredientItemToRemove) => {
    const newFieldsToUpdate = { ...fieldsToUpdate }
    if (!newFieldsToUpdate.ingredients) {
      newFieldsToUpdate.ingredients = recipe.ingredients
    }
    newFieldsToUpdate.ingredients = newFieldsToUpdate.ingredients.filter(function (ingredient) { return ingredient.item !== ingredientItemToRemove })
    setFieldsToUpdate(newFieldsToUpdate)
  }



  const navigateTo = useNavigate()

  const formSubmitHandler = e => {
    e.preventDefault()
    if (validateInput(fieldsToUpdate)) {
      Axios.post('/recipe', fieldsToUpdate)
        .then(() => {
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
      if (!form[field]) {
        console.warn(`The ${field} field is empty! Please try again!`)
        isValid = false
      }
    }
    return isValid
  }

  return (
    <form style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

      <label>
        recipe name
        <input name={'title'} onChange={e => textChangeHandler(e.target)} defaultValue={recipe.title} />
      </label>

      <label>
        description
        <textarea name={'description'} onChange={e => textChangeHandler(e.target)} defaultValue={recipe.description} />
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
        ingredients

        {fieldsToUpdate.ingredients
          ?
          fieldsToUpdate.ingredients.map((ingredient) => (
            <Ingredient ingredient={ingredient} removeIngredientHandler={removeIngredientHandler} key={uuid()} />
          ))
          :
          recipe.ingredients.map((ingredient) => (
            <Ingredient ingredient={ingredient} removeIngredientHandler={removeIngredientHandler} key={uuid()} />
          ))
        }
        <AddIngredient addFieldHandler={addFieldHandler} />
      </label>

      <label>
        steps
        {fieldsToUpdate.steps
          ?
          fieldsToUpdate.steps.map((step) => (
            <Step step={step} removeStepHandler={removeStepHandler} key={uuid()} />
          ))
          :
          recipe.steps.map((step) => (
            <Step step={step} removeStepHandler={removeStepHandler} key={uuid()} />
          ))
        }
        <AddStep addFieldHandler={addFieldHandler} />
      </label>

      <button type='submit' onClick={formSubmitHandler}>Submit form</button>
    </form>
  )
}