import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component"
import DiscountsList from "./components/discounts-list.component";
import EditDiscount from "./components/edit-discounts.component";
import CreateDiscount from "./components/create-discount.component";
import CreateProduct from "./components/create-product.component";

function App() {
  return (
      <Router>
        <div className="container">
          <Navbar />
          <br/>
          <Route path="/" exact component={DiscountsList} />
          <Route path="/edit/:id" component={EditDiscount} />
          <Route path="/create" component={CreateDiscount} />
          <Route path="/product" component={CreateProduct} />
        </div>
      </Router>
  );
}

export default App;
