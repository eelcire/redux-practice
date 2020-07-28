import React, { Component } from "react";

import HeaderContainer from "./containers/HeaderContainer";
import FormContainer from "./containers/FormContainer";
import TodosContainer from "./containers/TodosContainer";

class App extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <FormContainer />
        <TodosContainer />
      </div>
    );
  }
}

export default App;
