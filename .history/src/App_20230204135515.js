import BurgerStack from './components/BurgerStack.jsx'
import IngredientList from './components/IngredientList.jsx'
import './App.css';

function App() {

  const handleIngredientClick = (e) => {
    console.log(e.target.innerText)
  }

  return (
    <div className="App burger-stacker">
      <IngredientList handleIngredientClick={handleIngredientClick} />
      <BurgerStack />
    </div>
  );
}

export default App;
