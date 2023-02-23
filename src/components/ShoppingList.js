import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  let items1 = [...items]
  
  const [selectedCategory, setSelectedCategory] = useState("All")

  function handleCat(e){
    setSelectedCategory(e.target.value)}
    

    items1 = items.filter((item)=> {
      if (selectedCategory === "All"){
      return true
      }
      else {
      return (selectedCategory===item.category)
      }})

    const className = selectedCategory ? "not in cart" : "in-cart"
  
  
  return (

    <div className="ShoppingList">
      <div className= "catagory">
        <select onChange={handleCat} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items1.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} className={selectedCategory} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
