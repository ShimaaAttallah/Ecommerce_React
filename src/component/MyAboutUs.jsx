import React from "react";
import "./css/MyAboutstyle.css";

export function MyAboutUs() {   
    return (
        <div>
            <div id="section">
                <div class="container">
                    <div class="content-section">
                        <div class="title">
                            <h1>About Us</h1>
                        </div>
                        <div class="content">
                            <h3>We’ve always been in business to improve lives.</h3>
                            <p>
                                E-commerce (electronic commerce) is the buying and selling of goods and services, 
                                or the transmitting of funds or data, over an electronic network, primarily the internet. 
                                These business transactions occur either as business-to-business (B2B)
                                , business-to-consumer (B2C), consumer-to-consumer or consumer-to-business.
                            </p>
                            <div class="button">
                                <a href="#!">Read More</a>
                            </div>
                        </div>
                        <div class="social">
                            <a href="#!" class="social-link"><i class="fa fa-instagram"></i></a>
                            <a href="#!" class="social-link"><i class="fa fa-facebook-square"></i></a>
                            <a href="#!" class="social-link"><i class="fa fa-twitter-square"></i></a>
                        </div>
                    </div>
                    <div class="image-section">
                        <img src={require("./img/aboutus.jpg")}  alt="" />
                    </div>
                </div>
            </div>
        </div>
        
    );

} 