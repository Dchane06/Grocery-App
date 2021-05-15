import React, { useState, useEffect } from "react";
import '../index.css';

// State to save items



function Middle() {
    const [items, setItems] = useState([
        { itemName: "item 1", quantity: 1, isSelected: false },
        { itemName: "item 2", quantity: 2, isSelected: false },
        { itemName: "item 3", quantity: 3, isSelected: false },
    ]);

    return (
        <div class="card text-center">
  <div class="card-header">
    List
  </div>
  <div class="card-body">
    <h5 class="card-title">This is your grocery list!</h5>
    <p class="card-text">Use the input boxes and button below to create your grocery list.</p>
    <p class="card-text">Put the name of the item in the Item Name box, then put how much of the item you have left in the Quantity Left box.</p>
    <p class="card-text">Use the + or - button beside the Item Name box to add or remove an item. Use the + or - beside the Quantity Left box to add or subtract the quantity left.</p>
        <div className="item-list">
            {items.map((item, index) => (
                    <div className="item-name">
                        {item.isSelected ? (
                            <>
                            <span className="completed">{item.itemName}</span>
                            </>
                        ) : (
                            <>
                                <span>{item.itemName}</span>
                            </>
                        )}
                    
                <div className="quantity">
                    <button>-</button>
                    <span> {item.quantity} </span>
                    <button>+</button>
                </div>
        </div>
            ))}
    </div>
    </div>
    </div>
    )
                        }
export default Middle;