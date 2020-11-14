import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import DespreNoi from './pages/DespreNoi';
import Tsc from './pages/Tsc';

export default function App() {
  // return <AnimationRevealPage disabled></AnimationRevealPage>;
  return (
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
      </Switch>
    </Router>
  );
}