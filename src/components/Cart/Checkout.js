import React from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement,
  StripeProvider,
  Elements,
  injectStripe
} from "react-stripe-elements";
import { withRouter } from "react-router-dom";

const createOptions = fontSize => {
  return {
    style: {
      base: {
        fontSize,
        color: "#424770",
        letterSpacing: "0.025em",
        fontFamily: "Source Code Pro, Menlo, monospace",
        "::placeholder": {
          color: "#aab7c4"
        }
      },
      invalid: {
        color: "#9e2146"
      }
    }
  };
};

class _SplitForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(ev) {
    console.log("here");
    ev.preventDefault();
    this.props.stripe.createToken().then(payload => {
      console.log(payload);
      if (payload.token) {
        this.props.history.push("/confirm");
      }
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <span>Card number</span>
          <CardNumberElement {...createOptions(this.props.fontSize)} />
        </label>
        <label>
          <span>Expiration date</span>
          <CardExpiryElement {...createOptions(this.props.fontSize)} />
        </label>
        <label>
          <span>CVC</span>
          <CardCVCElement {...createOptions(this.props.fontSize)} />
        </label>
        <label>
          <span>Postal code</span>
          <PostalCodeElement {...createOptions(this.props.fontSize)} />
        </label>
        <button>
          Pay
        </button>
      </form>
    )}
}
const SplitForm = withRouter(injectStripe(_SplitForm));

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      elementFontSize: window.innerWidth < 450 ? "14px" : "18px"
    };
    window.addEventListener("resize", () => {
      if (window.innerWidth < 450 && this.state.elementFontSize !== "14px") {
        this.setState({ elementFontSize: "14px" });
      } else if (
        window.innerWidth >= 450 &&
        this.state.elementFontSize !== "18px"
      ) {
        this.setState({ elementFontSize: "18px" });
      }
    });
  }

  render() {
    const { elementFontSize } = this.state;
    return (
      <StripeProvider apiKey="pk_test_6pRNASCoBOKtIshFeQd4XMUh">
        <div className="Checkout">
          <h2>Card Split-field Form</h2>
          <Elements>
            <SplitForm fontSize={elementFontSize} />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default Checkout;

/* import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = ({ success }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async event => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    });

    if (!error) {
      const { id } = paymentMethod;

      try {
        const { data } = await axios.post("./api/charge", { id, amount: 1099 });
        console.log(data);
        success();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: "400px", margin: "0 auto" }}
    >
      <h2>Price: $10.99 USD</h2>
      <img
        src="https://images.ricardocuisine.com/services/recipes/500x675_7700.jpg"
        style={{ maxWidth: "50px" }}
      />
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

// you should use env variables here to not commit this
// but it is a public key anyway, so not as sensitive
const stripePromise = loadStripe("pk_test_NmUxHAcZSq3gU8mA4nTKN1fX002IdVBPBr");

const Checkout = () => {
  const [status, setStatus] = React.useState("ready");

  if (status === "success") {
    return <div>Congrats on your empanadas!</div>;
  }

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm
        success={() => {
          setStatus("success");
        }}
      />
    </Elements>
  );
};

export default Checkout;
 */