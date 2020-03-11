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
                    <div className="col-10 mt-2">
                            <span className="text-total">
                                Subtotal : ${cartSubTotal}</span>
                            <span className="text-total">
                                Tax : ${cartTax}</span>
                            <span className="text-total mb-3">
                                Total : ${cartTotal}</span>
                        <PaypalButton total={cartTotal} clearCart={clearCart} 
                            history={history}
                        />
                    </div>
                    <div className="col-2 mt-2">
                        <Link to="/">
                                <button className="button" 
                                type="button"
                                onClick={()=>clearCart()}>
                                    clear cart
                                </button>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

