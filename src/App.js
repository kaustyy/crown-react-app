import React from "react";
import {Route, Switch} from 'react-router-dom';
import Homepage from "./pages/homePage/home.component";
import ShopPage from "./pages/shopPage/shop.component";
import Header from './components/header/header.component';
import "./App.css";

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path="/" exact component={Homepage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
