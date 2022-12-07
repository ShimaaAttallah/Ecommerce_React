import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./css/MyNavstyle.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function MyNavbar() {
  const state = useSelector((state) => state.handleCart);
  return (
    <div>
      <Navbar bg="dark text-light" expand="lg">
        <Container>
          <img className="logo-image" src={require("./img/logo.png")} />
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="textcolor mx-auto textAlign-center">
              <NavLink to="/" className="text ms-5">
                Home
              </NavLink>
              <NavLink to="/products" className="text ms-5">
                Catagoris
              </NavLink>
              <NavLink to="/about" className="text ms-5">
                About
              </NavLink>
              <NavLink to="/contact" className="text ms-5">
                Contact US
              </NavLink>
              {/*<Nav.Link href="#Cart" className="text ms-5">
                Cart
                <img className="cart-logo " src={require("./cart.png")} />
              </Nav.Link>
              <Nav.Link href="#Favourite" className="text ms-5">
                Favourite
                <img className="wish-logo" src={require("./fav.png")} />
              </Nav.Link>*/}
            </Nav>

            <div className="buttons bg-light btn-outline-dark mb-sm-2 mb-lg-0">
              <i className="fa fa-sign-in ms-1 "></i>
              <NavLink to="/login" className="text-dark btn ">
                Login
              </NavLink>
            </div>
            <div className="buttons bg-light btn-outline-dark ms-lg-2 mb-sm-2 mb-lg-0">
              <i className="fa fa-user-plus ms-1"></i>
              {/* onClick={() => addProduct(product)} */}
              <NavLink to="/signup" className="text-dark btn ">
                Sign Up
              </NavLink>
            </div>
            <div className="buttons bg-light btn-outline-dark ms-lg-2 mb-sm-2 mb-lg-0">
              <i className="fa fa-shopping-cart ms-1 "></i>
              <NavLink to="/cart" className="text-dark btn ">
                Cart ({state.length})
              </NavLink>
            </div>

            {/*
                  <NavDropdown
              title="Have Account?"
              id="basic-nav-dropdown"
              className="text ms-auto"
            >
              <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Sign up</NavDropdown.Item>
            </NavDropdown>
             */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
