import "./App.css";
import Home from "./component/Home";
import NavContainer from "./component/Navbar";
import { Route, Switch } from "react-router";


import Products from "./component/Products";
import Product from "./component/Product";

function App() {
  return (
    <>
      <NavContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/product/:id" component={Product}/>
      </Switch>
    </>
  );
}

export default App;
