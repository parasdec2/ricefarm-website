import "./App.css";
import { Home, About, Catalog } from "./pages/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/catalog" component={Catalog} />
          <Route exact path="/aboutus" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
      {/* <Catalog /> */}
    </div>
  );
}

export default App;
