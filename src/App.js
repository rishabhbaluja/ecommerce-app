import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/shop" component={ShopPage}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
