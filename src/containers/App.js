import React, { Component } from "react";
import "./App.css";
import Sidebar from "../components/sidebar/Sidebar";
import Main from "../components/main/Main";
import store from "../store";
import _ from "lodash";

class App extends Component {
  render() {
    const { contacts } = store.getState();
    return (
      <div className="flex__container">
        <Sidebar contacts={_.values(contacts)} />
        <Main />
      </div>
    );
  }
}

export default App;
