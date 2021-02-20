import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screen/home";
import "bootstrap/dist/css/bootstrap.min.css";
import login from "./screen/auth/logis";
function App() {
  return <div>
    <Router>
      <Switch>
        <Route exact path ="/" component={Home} />
        <Route path ="/login" component={login} />
      </Switch>
    </Router>
  </div>;
}

export default App;
