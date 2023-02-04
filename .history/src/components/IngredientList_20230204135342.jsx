import React from 'react'
import Ingredient from './Ingredient.jsx'

const IngredientList = () => {
    const ingredientObjects = [
        {name: 'Kaiser Bun', color: 'saddlebrown'},
        {name: 'Sesame Bun', color: 'sandybrown'},
        {name: 'Gluten Free Bun', color: 'peru'},
        {name: 'Lettuce Wrap', color: 'olivedrab'},
        {name: 'Beef Patty', color: '#3F250B'},
        {name: 'Black Bean Patty', color: '#3F250B'},
        {name: 'Cheese', color: 'mustard'},
        {name: 'Lettuce', color: 'lawngreen'},
        {name: 'Tomato', color: 'tomato'},
        {name: 'Bacon', color: 'maroon'},
        {name: 'Onion', color: 'lightyellow'}
      ] 
    
      const ingredients = ingredientObjects.map((ingredientObject, index) => {
        return (
          <Ingredient
          key={`yum ${index}`}
            name={ingredientObject.name}
            color={ingredientObject.color}
                handleIngredientClick={props.handleIngredientClick}
          />
        ) 
      })
    
      return (
        <div>
          <h1>Ingredient List</h1>
          {ingredients}
        </div>
      )
    }

export default IngredientList