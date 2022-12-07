import React from "react";
import ReactDOM from "react-dom";
import { Container } from "react-bootstrap";
import SubTotal from "../component/SubTotal";
import PickupSavings from "../component/PickupSavings";
import TaxesFees from "../component/TaxesFees";
import EstimatedTotal from "../component/EstimatedTotal";
import ItemDetails from "../component/ItemDetails";

import "bootstrap/dist/css/bootstrap.min.css";
import "../component/css/styles.css";


export function MycartShop() {
    return (
      <div className="purchase-card">
      <Container>
        <SubTotal />
        <br />
        <PickupSavings />
        <br />
        <TaxesFees />
        <hr />
        <EstimatedTotal />
        <br />
        <ItemDetails />
      </Container>
    </div>
  );
} 