import React, { Component } from "react";
import { connect } from "react-redux";

import { changePosition } from "../actions";

class Grid extends Component {
  changePostion = e => {
    this.props.changePosition(Number(e.target.getAttribute("data-grid")));
  };

  renderGrids() {
    return this.props.gridStatus.lists.gridStatus.map(
      ({ currentNum }, index) => {
        if (currentNum != null) {
          return (
            <div
              className="container__each"
              key={index}
              data-grid={index + 1}
              data-value={currentNum}
              onClick={this.changePostion}
            >
              {currentNum}
            </div>
          );
        } else {
          return (
            <div
              className="container__each NoNum"
              key={index}
              data-grid={index + 1}
              data-value={currentNum}
            >
              {currentNum}
            </div>
          );
        }
      }
    );
  }

  render() {
    console.log("pp", this.props);
    if (this.props.gridStatus.lists.start === true) {
      let success = true;
      for (let q = 0; q < 8; q++) {
        if (
          this.props.gridStatus.lists.gridStatus[q].currentNum !=
          this.props.gridStatus.lists.gridStatus[q].gridID
        ) {
          success = false;
        }
      }
      if (success == true) {
        // window.localStorage.setItem();
        return <h1 style={{ color: "green", margin: "auto" }}>恭喜過關！</h1>;
      }
      if (success == false) return this.renderGrids();
    }
    return this.renderGrids();
  }
}

const mapStateToProps = state => {
  return { gridStatus: state };
};

export default connect(
  mapStateToProps,
  { changePosition: changePosition }
)(Grid);
