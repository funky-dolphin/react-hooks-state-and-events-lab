import React, {useState} from "react";

function Item({ name, category, className }) {

const [inCart, setInCart] = useState(false) 

function handleCart(){
  setInCart (!inCart)
}

const cartText = inCart ? "Remove from Cart" : "Add to Cart"
className = inCart ? "in-cart" : "not added"


  return (
    <li className = {className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCart} className="add">{cartText}</button>
    </li>
  );
}

export default Item;
