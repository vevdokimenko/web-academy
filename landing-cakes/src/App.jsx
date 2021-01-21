import React from "react";
import "./styles/App.scss";
import { Navbar } from "./components/navbar/Navbar";
import { HashRouter, Route } from "react-router-dom";
import { About } from "./components/about/About";
import { Footer } from "./components/footer/Footer";

const author = {
  firstName: "Hanna",
  lastName: "Mason",
  job: "Bakes",
};

const createdBy = {
  name: "Wix.com",
  link: "http://wix.com/?utm_campaign=vir_created_with",
};

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
            <Route path="/about" component={() => <About author={author} />} />
          </section>
        </main>
        <Footer author={author} createdBy={createdBy} />
      </div>
    </HashRouter>
  );
};
