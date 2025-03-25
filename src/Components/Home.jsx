import React, { useState, useEffect } from 'react';
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.jpg"
import Footer from './Footer';


const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    img1, img2, img3, img4, img5
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(handleNext, 5000);
    return () => clearInterval(intervalId);
  }, [handleNext]);

  return (
    <div>
      <div className="carousel">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${activeIndex === index ? 'active' : ''}`}
          >
            <img src={image} alt="Carousel Image" />
          </div>
        ))}
      </div>
      <button id='but' onClick={handlePrev}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
      </svg></button>
      <button id='but' onClick={handleNext}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
      </svg></button>
      <div className="categories-container">
        <h2>Product Categories</h2>
        <div className="categories">
          <div className="category">
            <img src="https://originsoap.com/wp-content/uploads/2024/08/icons8-soap-96.png" alt="Regular Soaps" className="category-icon" />
            <p>Regular Soaps</p>
          </div>
          <div className="category">
            <img src="https://originsoap.com/wp-content/uploads/2024/08/icons8-soap-961.png"alt="Special Soaps" className="category-icon" />
            <p>Special Soaps</p>
          </div>
          <div className="category">
            <img src="https://originsoap.com/wp-content/uploads/2024/08/icons8-soap-bubble-96.png" alt="Premium Soaps" className="category-icon" />
            <p>Premium Soaps</p>
          </div>
          <div className="category">
            <img src="https://originsoap.com/wp-content/uploads/2024/08/icons8-soap-dispenser-96.png" alt="Shampoo" className="category-icon" />
            <p>Shampoo</p>
          </div>
          <div className="category">
            <img src="https://originsoap.com/wp-content/uploads/2024/08/icons8-handwash-96.png" alt="Handwash" className="category-icon" />
            <p>Handwash</p>
          </div>
        </div>
      </div>
      <div className="fragrance-container">
        <h2>FRAGRANCE FINDER</h2>
        <p>Your signature scent's a click away</p>
        <div className="fragrance-categories">
          <div className="fragrance-item">
            <img src="https://www.bathandbodyworks.in/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw8bc153b3/CCD%2015.jpg" alt="WOODS" className="fragrance-img" />
            <div className="fragrance-overlay"></div>
          </div>
          <div className="fragrance-item">
            <img src="https://www.bathandbodyworks.in/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwad6ceac3/CCD%2010.jpg" alt="FLORAL" className="fragrance-img" />
            <div className="fragrance-overlay"></div>
          </div>
          <div className="fragrance-item">
            <img src="https://www.bathandbodyworks.in/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw0afae1a9/CCD%2011.webp" alt="FRESH" className="fragrance-img" />
            <div className="fragrance-overlay"></div>
          </div>
          <div className="fragrance-item">
            <img src="https://www.bathandbodyworks.in/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw34519e00/CCD%2012.jpg" alt="FRUIT" className="fragrance-img" />
            <div className="fragrance-overlay"></div>
          </div>
          <div className="fragrance-item">
            <img src="https://www.bathandbodyworks.in/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwb7b229ca/CCD%2013.jpg" alt="WARM" className="fragrance-img" />
            <div className="fragrance-overlay"></div>
          </div>
          <div className="fragrance-item">
            <img src="https://www.bathandbodyworks.in/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwf8315bec/CCD%2014.jpg" alt="GOURMAND" className="fragrance-img" />
            <div className="fragrance-overlay"></div>
          </div>
        </div>
      </div>
      <h1 className='gallery'>Gallery</h1>
      <div className='grid'>
        
        <div className='grid-items item1'><img src="https://picfiles.alphacoders.com/437/thumb-1920-437507.jpg" alt=""></img></div>
        <div className='grid-items item2' ><img src="https://earthbits.com/cdn/shop/articles/NEW_handmade-soaP_0d48ac11-7b53-468b-b0de-2d60a4758e35_2000x.jpg?v=1632132514" alt=""></img></div>
        <div className='grid-items item3'><img src="https://images.alphacoders.com/109/thumb-440-1092481.webp" alt=""></img></div>
        <div className='grid-items item4'><img src="https://picfiles.alphacoders.com/307/thumb-1920-307820.jpg" alt=""></img></div>
        <div className='grid-items item5'><img src="https://www.srisritattva.com/cdn/shop/articles/5_Benefits_of_Rose_Saffron_Soap_for_Healthy_Glowing_Skin.png?v=1698983278" alt=""></img></div>
      </div>
      <Footer/>
    </div>
    
  );
};

export default Home;