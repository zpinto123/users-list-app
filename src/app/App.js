import React, { Component } from "react";
import UsersList from "../features/usersList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <UsersList />
      </div>
    );
  }
}

export default App;
