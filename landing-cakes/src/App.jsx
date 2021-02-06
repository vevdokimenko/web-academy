import React from "react";
import "./styles/App.scss";
import { Navbar } from "./components/navbar/Navbar";
// noinspection ES6CheckImport
import { HashRouter, Route } from "react-router-dom";
import { About } from "./components/about/About";
import { Footer } from "./components/footer/Footer";
import { Contact } from "./components/contact/Contact";
import { Home } from "./components/home/Home";
import { Order } from "./components/order/Order";
import { Infopane } from "./components/order/productList/Infopane";

const createdBy = {
  name: "Wix.com",
  link: "http://wix.com/?utm_campaign=vir_created_with",
};

export const App = (props) => {
  return (
    <HashRouter>
      <Infopane
        infopane={props.data.infopane}
        item={props.functions.getPreOrder()}
        order={props.data.order}
        functions={props.functions}
      />
      <div className="App">
        <header>
          <Navbar data={props.data.home.socialIcons} />
        </header>
        <main>
          <section>
            <Route exact path="/" component={() => Home(props.data)} />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/order"
              component={() => (
                <Order order={props.data.order} functions={props.functions} />
              )}
            />
            <Route exact path="/contact" component={Contact} />
          </section>
        </main>
        <Footer createdBy={createdBy} />
      </div>
    </HashRouter>
  );
};
