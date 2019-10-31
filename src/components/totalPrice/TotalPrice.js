import React, { Component } from "react";
import classes from "./totalPrice.module.css";
//import ProductCategoryRow from "./ProductCategoryRow";

class TotalPrice extends Component {
  render() {
    return (
      <div className={classes.totalprice}>
        <div>
          <p>Total inc VAT</p>
        </div>
        <div>
          <span>£ </span>
          <input type="number" id="Price" />
          {}
        </div>
      </div>
    );
  }
}
export default TotalPrice;