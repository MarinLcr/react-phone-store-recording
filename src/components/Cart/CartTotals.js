import React from 'react';
import {Link} from 'react-router-dom';
import PaypalButton from './PaypalButton';
import StripeCheckout from 'react-stripe-checkout';
import {StripeProvider} from 'react-stripe-elements';
import axios from 'axios';
import {toast} from 'react-toastify';
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
/* toast.configure(); */

export default function CartTotals({value, history}) {
    const{cartSubTotal,cartTax,cartTotal,clearCart} = value;


    /* const [product] = React.useState({
        name: "Tesla Roadster",
        price: 64998.67,
        description: "Cool car"
      }); */

    /* async function handleToken(token, addresses) {
        const response = await axios.post(
          "https://codesandbox.io/s/node-stripe-checkout-final-kh4lg",
          { token, product }
        );
        const { status } = response.data;
        console.log("Response:", response.data);
        if (status === "success") {
          toast("Success! Check email for details", { type: "success" });
        } else {
          toast("Something went wrong", { type: "error" });
        }
      } */

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" 
                            type="button"
                            onClick={()=>clearCart()}>
                                clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title">
                                subtotal :
                            </span>
                            <strong>$ {cartSubTotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                tax :
                            </span>
                            <strong>$ {cartTax}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                total :
                            </span>
                            <strong>$ {cartTotal}</strong>
                        </h5>
                        <PaypalButton total={cartTotal} clearCart={clearCart} 
                            history={history}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

