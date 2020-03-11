import React from 'react';
import {Switch,Route} from 'react-router-dom'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/Cart'
import Default from './components/Default'
import Modal from './components/Modal'
import Checkout from './components/Cart/Checkout'
import Slideshow from './components/Slideshow';

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={ProductList}/>
        <Route path="/slide" component={Slideshow}/>
        <Route path="/details" component={Details}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/cart/checkout" component={Checkout} />
        <Route component={Default}/>
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
