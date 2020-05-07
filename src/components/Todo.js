import React, { Component } from "react";
import { connect } from "react-redux";

class Todo extends Component {
  render() {
    console.log(this.props);
    return <div>{this.props.todo}</div>;
  }
}

const mapStateToProps = (state) => {
  return { todos: state };
};

export default connect(mapStateToProps)(Todo);
