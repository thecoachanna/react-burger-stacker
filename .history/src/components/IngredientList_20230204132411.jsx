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
    cinst ingrdients = ingredientObjects.map((ingredientObject, index) => {
        return (
            <Ingredient key={`${index}`}
        )
    })
    
  return (
    <div>IngredientList</div>
  )
}

export default IngredientList