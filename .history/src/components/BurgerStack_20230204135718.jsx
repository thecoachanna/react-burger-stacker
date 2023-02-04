import React from 'react'
import Ingredient from './Ingredient.jsx'

const BurgerStack = () => {
    const ingredients = props.clickedIngredients.map((ingredient, index) => {
        return (
          <Ingredient
          key={`yum ${index}`}
          name={ingredient.name}
        />
        )
      })
      return (
        <div>
          <h1>Burger Stack</h1>
          {ingredients}
        </div>
      )
    }

export default BurgerStack