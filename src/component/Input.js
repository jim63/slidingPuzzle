import React, { Component } from "react";
import { connect } from "react-redux";

import { welcome, startNewGame } from "../actions";

class Input extends Component {
  inputSubmit = e => {
    e.preventDefault();
    console.log(e.currentTarget.querySelector("input").value);

    if (e.currentTarget.querySelector("input").value.trim().length > 0) {
      this.props.welcome(e.currentTarget.querySelector("input").value);
      this.props.startNewGame();
    }
  };

  noName = () => {
    this.props.welcome("陌生人");
    this.props.startNewGame();
  };

  newGame = () => {
    this.props.startNewGame();
  };

  renderInput = () => {
    console.log(this.props.gridStatus.lists.step);

    if (this.props.gridStatus.welcome.length > 0) {
      return (
        <div className="showName">
          Let's go, {this.props.gridStatus.welcome}
          <br />
          走了 {this.props.gridStatus.lists.step} 步
          <div className="startGame" onClick={this.newGame}>
            重新遊戲
          </div>
        </div>
      );
    } else {
      return (
        <form id="nameInput" onSubmit={this.inputSubmit}>
          <input type="text" id="name" placeholder="請輸入姓名" />
          <div className="startGame" onClick={this.noName}>
            匿名開始
          </div>
        </form>
      );
    }
  };

  render() {
    return this.renderInput();
  }
}

const mapStateToProps = state => {
  return { gridStatus: state };
};

export default connect(
  mapStateToProps,
  { welcome: welcome, startNewGame: startNewGame }
)(Input);
