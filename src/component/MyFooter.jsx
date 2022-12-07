import React from "react";
import "./css/MyFooterstyle.css";

export function MyFooter() {   
    return (
        <footer>
            <div class="footer-content">
                <img src={require("./img/Footer-logo.png")} class="logo" alt="" />
                <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">
                        <a href="#!" class="footer-link">Men</a>
                    </li>
                </ul>
                <ul class="category">
                    <li class="category-title">
                        <a href="#!" class="footer-link">Women</a>
                    </li>
                </ul>
                <ul class="category">
                    <li class="category-title">
                        <a href="#!" class="footer-link">Jewelery</a>
                    </li>
                </ul>
                <ul class="category">
                    <li class="category-title">
                        <a href="#!" class="footer-link">Electronics</a>
                    </li>
                </ul>
                </div>
            </div>
            <p class="footer-title">about company</p>
            <p class="info">
                We are an online shopping store that follows the latest fashion trends
                and follows them.We try to provide you with all your needs in one place
                in the most convenient way and the most easy and secure payment methods.
            </p>
            <p class="info">
                support emails - help@clothing.com, customersupport@clothing.com
            </p>
            <p class="info">telephone - 180 00 00 001, 180 00 00 002</p>
            <div class="footer-social-container">
                <div class="social-icons">
                <div>
                    <a href="#!" class="social-link">terms & services</a>
                    <a href="#!" class="social-link">privacy page</a>
                </div>
                <div>
                    <a href="#!" class="social-link"><i class="fa fa-instagram"></i></a>
                    <a href="https://www.facebook.com" class="social-link"><i class="fa fa-facebook-square"></i></a>
                    <a href="#!" class="social-link"><i class="fa fa-twitter-square"></i></a>
                </div>
                </div>
            </div>
            <p class="footer-credit">Ecommerce, Best apparels online store</p>
            </footer>
    );

} 