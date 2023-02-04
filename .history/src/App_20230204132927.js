import BurgerStack from './components/BurgerStack.jsx'
import IngredientList from './components/IngredientList.jsx'
import './App.css';

function App() {

  const handleIngredientClick = (e) => {
    console.log(e)
  }

  return (
    <div className="App burger-stacker">
      <IngredientList handleIngredientClick/>
      <BurgerStack />
    </div>
  );
}

export default App;
