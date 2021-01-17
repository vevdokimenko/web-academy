import "./styles/App.scss";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Users } from "./components/users/Users";
import { Button } from "./components/button/Button";

export const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/"></Route>
            <Route path="/users">
              <Users />
            </Route>
          </Switch>
        </div>
      </Router>
      <Button label="Meet Hanna" link="/" />
      <Button label="Contact Me" link="/#/users" />
    </div>
  );
};
