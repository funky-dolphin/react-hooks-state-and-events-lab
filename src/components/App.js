import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  
  const [isDarkMode, setIsDarkMode] = useState(false)

  function handleClick(){
  setIsDarkMode(!isDarkMode)
  }
 

  const appClass = isDarkMode ? "App dark" : "App light"
  const buttonText = isDarkMode ? "Light Mode" : "Dark Mode"


  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{buttonText}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
