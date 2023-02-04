import { useState, useEffect } from 'react'
import BurgerStack from './components/BurgerStack.jsx'
import IngredientList from './components/IngredientList.jsx'
import './App.css';

function App() {

  const [clickedIngredients, setClickedIngredients] = useState([])

  useEffect(() => {
    console.log(clickedIngredients)
  }, [clickedIngredients] )


  const handleIngredientClick = (e) => {
    // console.log(e.target.innerText)
    setClickedIngredients([...clickedIngredients, { name: e.target.innerText }])
  }


  return (
    <div className="App burger-stacker">
      <IngredientList handleIngredientClick={handleIngredientClick} />
      <BurgerStack clickedIngredients/>
    </div>
  );
}

export default App;
