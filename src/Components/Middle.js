import React, { useState, useEffect } from "react";
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan } from '@fortawesome/free-solid-svg-icons';


// State to save items



function Middle() {
    const [items, setItems] = useState([
    ]);

    const [inputValue, setInputValue] = useState("");

    const handleAddButtonClick = () => {
        const newItem = {
            itemName: inputValue,
            quantity: 1,
            isSelected: false,
        }

        const newItems = [...items, newItem];

        setItems(newItems);
        setInputValue("");
    }

    const handleAddQuantityClick = (index) => {
        // if increase is clicked, pick out object clicked, and then add 1 to quantity.
        const newItems = [...items];

        // Object's index
        newItems[index].quantity++;

        setItems(newItems);

    }

    const handleSubtractQuantityClick = (index) => {
        const newItems = [...items];

        newItems[index].quantity--;

        // if (newItems[index].quantity === 0) {
        //     let value = 0;
        //     newItems = newItems.filter(item => item !== value)
        // }
        setItems(newItems);
    }

    const toggleComplete = (index) => {
        const newItems = [...items];
        
        newItems[index].isSelected = !newItems[index].isSelected;

        setItems(newItems);
    }

    const handleDeleteButtonClick = (index) => {
        const newItems = [...items];

        newItems.splice(index, 1);
        setItems(newItems);

        

        setItems(newItems);
    }
    return (
        <div class="card">
        <div class="card text-center">
  <div class="card-header">
    List
  </div>
  <div class="card-body">
    <h5 class="card-title">This is your grocery list!</h5>
    <p class="card-text">Use the input boxes and button below to create your grocery list.</p>
    <p class="card-text">Put the name of the item in the Item Name box, then put how much of the item you have left in the Quantity Left box.</p>
    <p class="card-text">Use the + or - button beside the Item Name box to add or remove an item. Use the + or - beside the Quantity Left box to add or subtract the quantity left.</p>
        <div className="add-item-box">
            <input value={inputValue} onChange={(event)=> setInputValue(event.target.value)} className="add-item-input"></input>
        <button className="add-item-button" onClick={() => handleAddButtonClick()}>Add to list!</button>
        </div>
        <div className="item-list">
            {items.map((item, index) => (
                    <div className="item-name" onClick={() => toggleComplete}>
                        <span>{item.itemName}</span>
                    
                <div className="quantity">
                    <button onClick={() => handleSubtractQuantityClick(index)}>-</button>
                    <span> {item.quantity} </span>
                    <button onClick={() => handleAddQuantityClick(index)}>+</button> <button onClick={() => handleDeleteButtonClick(index)}>Delete</button>
                </div>
        </div>
            ))}
    </div>
    </div>
    </div>
    </div>
    )
                        }
export default Middle;