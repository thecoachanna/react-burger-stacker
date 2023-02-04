import React from 'react'

const Ingredient = (props) => {
  return (
      <div>
          <h3 onClick={props.handleIngredientClick}>{props.name}</h3>
    </div>
  )
}

export default Ingredient