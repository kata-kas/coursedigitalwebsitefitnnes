import React, { useState } from 'react';

import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart';
import PaymentRequest from '../components/PaymentRequest';

const CartSummary = () => {
  const [loading, setLoading] = useState(false);
  const {
    totalPrice,
    cartCount,
    clearCart,
    cartDetails,
    redirectToCheckout,
  } = useShoppingCart();

  const handleCheckout = async (event) => {
    event.preventDefault();
    setLoading(true);

    const { sessionId } = await fetch(
      '/.netlify/functions/create-checkout-session',
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartDetails),
      }
    )
      .then((res) => {
        return res.json();
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });

    redirectToCheckout({ sessionId });
  };

  return (
    <div>
      <h2>Coș</h2>
      {/* This is where we'll render our cart */}
      <p>Număr de produse: {cartCount}</p>
      <p>
        Total:{' '}
        {formatCurrencyString({
          value: totalPrice,
          currency: 'RON',
        })}
      </p>

      <PaymentRequest />
      {/* Redirects the user to Stripe */}
      <button disabled={!cartCount || loading} onClick={handleCheckout}>
      Plătiți
      </button>
      <button onClick={clearCart}>Golește coșul</button>
    </div>
  );
};

export default CartSummary;
