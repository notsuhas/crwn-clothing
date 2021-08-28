import React from "react";

import StripeCheckout from "react-stripe-checkout";

import "./stripe-button.styles.scss";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51JTNDPSIZyakXC8drewS3Q1751z23qP6gcH2yf63iZEPj8XOv8km8Wo8b1GXStqk2J4IAXirgog4LOAzQdjdhYWb00CDtR3B6w";

	const onToken = (token) => {
		console.log(token);
		alert("Payment Successful!");
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing"
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUZ.svg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
