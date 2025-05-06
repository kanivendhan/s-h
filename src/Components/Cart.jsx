import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "./Counter";
import Footer from "./Footer";


const Cart = () => {
  const cart = useSelector((state) => state.usersInfo.users);
  const dispatch = useDispatch();

  // State to track item quantities
  const [quantities, setQuantities] = useState({});

  // Function to increase quantity
  const increaseQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,}));
  };

  // Function to decrease quantity
  const decreaseQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1, // Ensuring minimum quantity is 1
    }));
  };

  // Function to calculate total price
  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const quantity = quantities[item.id] || 1; // Default quantity is 1
      const price = parseFloat(item.price.replace("₹", "")); // Remove ₹ and convert to number
      return total + price * quantity;
    }, 0);
  };

  return (
   <div>
      <div id="whole-cart">
        <h1>Cart</h1>
        <ul>
          {cart?.map((user, index) => (
            <div id="outer-cart" key={index}>
              <h2 id="user-title">{user.title}</h2>
              <p id="user-id">ID: {user.id}</p>
              <p id="user-price">Price: {user.price}</p>
              <img src={user.img} alt={user.title} style={{ width: "100px" }} />

              {/* Quantity Controls */}
              <div className="quantity-controls">
                <button onClick={() => decreaseQuantity(user.id)}>-</button>
                <span>{quantities[user.id] || 1}</span>
                <button onClick={() => increaseQuantity(user.id)}>+</button>
              </div>

              {/* Buy Now & Remove Buttons */}
              <div className="cart-buttons">
                <button className="buy-button">Buy Now</button>
                <button className="remove-button" onClick={() => {
                  const confirmDelete = window.confirm(`Are you sure you want to remove ${user.title} from the cart?`);
                  if (confirmDelete) {
                    dispatch(deleteUser(index));
                    alert(`${user.title} has been removed from the cart.`);
                  }
                }}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </ul>

        {/* Total Price Section */}
        <h2 id="total-price">Total: ₹{getTotalPrice().toFixed(2)}</h2>


      </div>
    <Footer/>
   </div>
  );
};

export default Cart;
