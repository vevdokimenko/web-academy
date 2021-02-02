import React from "react";
import "./styles/App.scss";
import { Navbar } from "./components/navbar/Navbar";
// noinspection ES6CheckImport
import { HashRouter, Redirect, Route } from "react-router-dom";
import { About } from "./components/about/About";
import { Footer } from "./components/footer/Footer";
import { Contact } from "./components/contact/Contact";
import { Home } from "./components/home/Home";

const createdBy = {
  name: "Wix.com",
  link: "http://wix.com/?utm_campaign=vir_created_with",
};

export const App = (props) => {
  return (
    <HashRouter>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>
          <section>
            <Route path="/">
              <Redirect from="/" to="/home" />
            </Route>
            <Route path="/home" component={() => Home(props.data)} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </section>
        </main>
        <Footer createdBy={createdBy} />
      </div>
    </HashRouter>
  );
};
