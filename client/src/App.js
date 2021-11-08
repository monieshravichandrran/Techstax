import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Router>
    </>
  )
}

export default App;