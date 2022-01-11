import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceInCents = price * 100;
  const publishableKey =
    "pk_test_51IgABcFdqD69kIAcvYTQo2rtJQKOyOgVSVp46RGIF9Hg9LxRfyVK24eaVYyuXtw0H4AeQmmXF2RXcjcbJ72JKUbt00HIzXoBd4";

   const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }


  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceInCents}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton
