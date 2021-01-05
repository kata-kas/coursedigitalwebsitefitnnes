import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import DespreNoi from './pages/DespreNoi';
import Tsc from './pages/Tsc';
import CursFpi from "./pages/CursFpi";
import Inscriere from "./pages/Inscriere";
import Felicitari from "./pages/Felicitari";
import Plata from "./pages/Plata";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CartProvider } from 'use-shopping-cart';
import './App.css'
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

export default function App() {
  // return <AnimationRevealPage disabled></AnimationRevealPage>;
  return (
    <Elements stripe={stripePromise}>
    <CartProvider mode="checkout-session" stripe={stripePromise} currency="RON">
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/contact">
            <Contact />
        </Route>
        <Route path="/despre-noi">
            <DespreNoi/>
        </Route>
        <Route path="/termeni-si-conditii">
            <Tsc/>
        </Route>
        <Route path="/curs-fitness-pentru-incepatori">
            <CursFpi/>
        </Route>
        <Route path="/inscriere">
            <Inscriere/>
        </Route>
        <Route path="/felicitari">
            <Felicitari/>
        </Route>
        <Router path="/cos">
          <Plata/>
        </Router>
      </Switch>
    </Router>
    </CartProvider>
    </Elements>
  );
}