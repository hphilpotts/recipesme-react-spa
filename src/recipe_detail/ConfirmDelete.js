import React from 'react'

export default function ConfirmDelete({ hideConfirmDelete, deleteRecipe }) {

  return (
    <div>
        <p>Are you sure you want to delete this recipe?</p>
        <p>This action cannot be reversed!</p>
        <button onClick={e => deleteRecipe(e)} >Yes, delete</button>
        <button onClick={e => hideConfirmDelete(e)}>No, cancel</button>
    </div>
  )
}
