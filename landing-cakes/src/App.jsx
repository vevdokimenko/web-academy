import "./styles/App.scss";
import { Button } from "./components/button/Button";
import { Navbar } from "./components/navbar/Navbar";
import { HashRouter, Route } from "react-router-dom";
import { About } from "./components/about/About";

export const App = () => {
  return (
    <HashRouter>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>
          <section>
            <Route path="/" />
            <Route path="/about" component={About} />
          </section>
        </main>
      </div>
    </HashRouter>
  );
};
