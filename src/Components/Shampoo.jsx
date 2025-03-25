import React from "react";
import { useDispatch } from "react-redux";
import { setUsers } from "./Counter";
import Footer from "./Footer";

const products = [
  { id: 1, title: "Argan Oil & Lavender Shampoo", price: "₹ 639", img: "https://lovebeautyandplanet.in/cdn/shop/files/arganshampoo400ml_303x.jpg?v=1724050289" },
  { id: 2, title: "Argan Oil(With Conditioner)", price: "₹ 1,148", img: "https://lovebeautyandplanet.in/cdn/shop/files/LoveBeauty_PlanetAntiFrizzCombo_303x.jpg?v=1720133549" },
  {
    id: 3, title: "Argan  Hair Mask Combo", price: "₹ 999", img: "https://lovebeautyandplanet.in/cdn/shop/files/argan_sh400_argan_mask_303x.jpg?v=1725263341"
  },
  {
    id: 4, title: "Patchouli Shampoo", price: "₹ 639", img: "https://lovebeautyandplanet.in/cdn/shop/files/1_df3673e4-0b36-4520-a584-b2396fe59c6f_303x.jpg?v=1720594569"
  },
  {
    id: 5, title: "Onion, Black Seed Shampoo", price: "₹ 624", img: "https://lovebeautyandplanet.in/cdn/shop/files/LoveBeauty_PlanetOnionBlackSeed_PatchouliHairfallControlShampoo_Conditioner_303x.jpg?v=1720134124"
  },
  {
    id: 6, title: "Hair Mask Combo Shampoo", price: "₹ 784", img: "https://lovebeautyandplanet.in/cdn/shop/files/LoveBeauty_PlanetOnionBlackSeed_PatchouliHairfallControlSulfateFreeShampoo_HairMask_303x.jpg?v=1720118053"
  },
  { id: 7, title: "Peptide Shampoo", price: "₹ 375", img: "https://lovebeautyandplanet.in/cdn/shop/files/1_439616e5-d3b1-457e-9dbc-71be8988f82f_303x.jpg?v=1722921718" },
  { id: 8, title: "Hibiscus Shampoo", price: "₹ 382", img: "https://lovebeautyandplanet.in/cdn/shop/files/1_dfb90aa4-d695-438b-ade4-8d5dda951ba4_303x.jpg?v=1720593008" },
  { id: 9, title: "Rice Water & Angelica Shampoo", price: "₹ 340", img: "https://lovebeautyandplanet.in/cdn/shop/files/1_3878dee6-1693-4f79-bfb4-d093d00b9a60_303x.jpg?v=1720754678" },
  { id: 10, title: "Curry Leaves & Biotin Shampoo", price: "₹ 360", img: "https://lovebeautyandplanet.in/cdn/shop/files/1_4bed055b-54be-4042-88d7-1ba456a7dc1a_303x.jpg?v=1720594194" },
  { id: 11, title: "Olive Oil & Peptide Shampoo", price: "₹ 387", img: "https://lovebeautyandplanet.in/cdn/shop/files/1_07ff23a6-05d2-4990-9e43-7a6e5166c26b_303x.jpg?v=1720594836" },
  { id: 12, title: "Jojoba oil , Hibiscus Shampoo", price: "₹ 337", img: "https://lovebeautyandplanet.in/cdn/shop/files/46114_S2-8909106024823_303x.jpg?v=1739428895" },
  { id: 13, title: "Rosemary & Yuzu Shampoo", price: "₹ 335", img: "https://lovebeautyandplanet.in/cdn/shop/files/46071_S1-8901030726125_303x.jpg?v=1730271544" },
  { id: 14, title: "Blue Shampoo", price: "₹ 700", img: "https://www.synksalon.com/data/uploads/2021/06/LOreal-Professionnel-Hair-Spa-Colour-Pure-Shampoo-250-ml.jpg" },
  { id: 15, title: "Shyamala Shampoo", price: "₹ 670", img: "https://vasustore.com/cdn/shop/products/ShyamlaShampoo-200ml.jpg?v=1667194420" },
  { id: 16, title: "Fruit extracts Shampoo", price: "₹ 744", img: "https://meemee.in/cdn/shop/files/MM-1290400ML1.jpg?v=1716023192" }
];

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const addUsers = () => {
    dispatch(setUsers(product));
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

const Shampoo = () => {
  return (
    <div>
      <div className="soap-container">
        <h1 className="soap-title">Shampoo Collection</h1>
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

export default Shampoo;
