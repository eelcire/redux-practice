import React, { Component } from "react";

import Header from "./components/Header";
import FormContainer from "./containers/FormContainer";
import TodosContainer from "./containers/TodosContainer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <FormContainer />
        <TodosContainer />
      </div>
    );
  }
}

export default App;
