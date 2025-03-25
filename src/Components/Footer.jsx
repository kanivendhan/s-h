import React from 'react';
import '../Components/footer.css'
import { Link } from 'react-router-dom';
import { FaFacebookSquare } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section" id='foot'>
                    <Link to="/home">
                        <div className="name na"><h1>S & H</h1></div>
                        <div className="slogan so">Skin and Hair</div>
                    </Link>
                    <p className="footer-text">
                        <strong>A brand of Nova Production Unit.</strong> Origin offers a wide selection of export quality, handmade organic soaps, specially formulated for Kerala skin types. Discover 150+ varieties of luxurious soaps.
                    </p>
                    <div className="footer-social">
                        <a href="#" className="footer-link"><FaFacebookSquare /></a>
                        <a href="#" className="footer-link"><ImInstagram /></a>
                        <a href="#" className="footer-link"><IoLogoYoutube /></a>
                    </div>
                </div>

                <div className="footer-section" id='foot2'>
                    <h3 className="footer-title">Contact Us</h3>
                    <p className="footer-text">Nova Production Unit, Cherukulathoor P.O., Calicut – 673008</p>
                    <p className="footer-text"><strong>📞</strong> +91 9387508749</p>
                    <p className="footer-text"><strong>✉️</strong>  s&h@gmail.com</p>
                </div>

                <div className="footer-section " id='foot3'>
                    <h3 className="footer-title">Quick Links</h3>
                    <ul className="footer-links">
                        <li><a href="#" className="footer-link">My Account</a></li>
                        <li><a href="#" className="footer-link">Contact Us</a></li>
                        <li><a href="#" className="footer-link">Return & Refund Policy</a></li>
                        <li><a href="#" className="footer-link">Become a Distributor</a></li>
                        <li><a href="#" className="footer-link">Become a Manufacturer</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Copyright &copy; 2025 | <a href="https://www.originsoap.com" className="footer-link">www.S & H.com</a></p>
                <p>
                    <a href="#" className="footer-link">Privacy & Policy</a> | <a href="#" className="footer-link">Terms of Use</a>
                </p>
                <p>Designed by <span className="footer-designer">Kani Vendhan</span></p>
            </div>
        </footer>
    );
};

export default Footer;