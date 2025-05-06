import React from "react";
import { useDispatch } from "react-redux";
import { setUsers } from "./Counter";
import Footer from "./Footer";

const products = [
  { id: 1, title: "Aloevera Soap", price: "₹33.90", img: "https://5.imimg.com/data5/SELLER/Default/2024/8/440430783/YD/FO/UJ/14124065/aloevera-soap-500x500.jpg" },
  { id: 2, title: "Sandal  Soap", price: "₹33.90", img: "https://originsoap.com/wp-content/uploads/2023/03/Sandal-3-min-270x270.jpg" },
  { id: 3, title: "Charcoal Soap", price: "₹33.90 – ₹50.85", img: "https://originsoap.com/wp-content/uploads/2023/03/Red-Sandal-Wood-3-min-270x270.jpg" },
  { id: 4, title: "Red Sandal Wood Soap", price: "₹33.90", img: "https://originsoap.com/wp-content/uploads/2023/03/Jasmine-2-min-270x270.jpg" },
  { id: 5, title: "Goat Milk Soap", price: "₹76.27", img: "https://originsoap.com/wp-content/uploads/2023/03/Goat-Milk-2-min-270x270.jpg" },
  { id: 6, title: "Royal Oudh Soap", price: "₹50.85", img: "https://originsoap.com/wp-content/uploads/2023/03/Royal-Oudh-3-min-270x270.jpg" },
  { id: 7, title: "Charcoal Soap", price: "₹135.59", img: "https://originsoap.com/wp-content/uploads/2023/03/Charcol-Origin-Soap-2-min-270x270.jpg" },
  { id: 8, title: "Turmeric Kasturi Soap", price: "₹135.59", img: "https://originsoap.com/wp-content/uploads/2023/03/Wayanadan-wild-turmeric-kasturi-manjal-2-min-270x270.jpg" },
  { id: 9, title: "Aloevera Soap", price: "₹135.59", img: "https://originsoap.com/wp-content/uploads/2023/03/Aloevera-1-min-270x270.jpg" },
  { id: 10, title: "Multani Mitti  Soap", price: "₹135.59", img: "https://originsoap.com/wp-content/uploads/2023/03/Multani-Mitti-2-min1-270x270.jpg" },
  { id: 11, title: "Multani Rose Soap", price: "₹33.90 – ₹50.85", img: "https://originsoap.com/wp-content/uploads/2023/03/Multani-Rose-min-270x270.jpg" },
  { id: 12, title: "Nalpamaram Soap", price: "₹33.90 – ₹50.85", img: "https://originsoap.com/wp-content/uploads/2023/03/Nalpamaram-3-min-270x270.jpg" },
  { id: 13, title: "Navakanthi Soap", price: "₹135.59", img: "https://originsoap.com/wp-content/uploads/2023/03/Navakanthi-3-min-270x270.jpg" },
  { id: 14, title: "Origin Herbal Soap", price: "₹33.90 – ₹50.85", img: "https://originsoap.com/wp-content/uploads/2023/03/Herbal-min-270x270.jpg" },
  { id: 15, title: "Origin Hibiscus", price: "₹67.80", img: "https://originsoap.com/wp-content/uploads/2023/03/Red-Sandal-Wood-3-min-270x270.jpg" },
  { id: 16, title: "Red Sandal Soap", price: "₹42.37", img: "https://originsoap.com/wp-content/uploads/2023/03/Red-Sandal-3-min-1-270x270.jpg" }
];

const ProductCard = ({ product }) => {
  const dispatch = useDispatch(); 

  const addUsers = () => {
    dispatch(setUsers(product));
    alert(`${product.title} has been added to your cart!`);
  };


  return (
    <div className="product-card">
      <img src={product.img} alt={product.title} className="product-img" />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-price">{product.price}</p>
      <div className="button-group">
        <button className="cart-button" onClick={addUsers}>Add to Cart</button>
      </div>
    </div>
  );
};

const Soap = () => {
  return (
    <div>
      <div className="soap-container">
        <h1 className="soap-title">Soap Collection</h1>
        <div className="soap-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Soap;
