import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import DespreNoi from './pages/DespreNoi';
import Tsc from './pages/Tsc';
import CursFpi from "./pages/CursFpi";
import Inscriere from "./pages/Inscriere";
import Felicitari from "./pages/Felicitari";

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
        <Route path="/curs-fitness-pentru-incepatori">
            <CursFpi/>
        </Route>
        <Route path="/inscriere">
            <Inscriere/>
        </Route>
        <Route path="/felicitari">
            <Felicitari/>
        </Route>
      </Switch>
    </Router>
  );
}