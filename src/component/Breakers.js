import React, { Component } from "react";
import { connect } from "react-redux";

import { getBreaker } from "../actions";

class Breakers extends Component {
  renderBreakers() {
    console.log("qqqq", this.props.gridStatus.getBreaker);
    if (this.props.gridStatus.getBreaker.length < 3) {
      return <p className="breakerTitle">沒有人</p>;
    } else {
      let data = JSON.parse(this.props.gridStatus.getBreaker);
      return data.map(p => {
        let name = p.name;
        let move = p.move;
        return (
          <div>
            <div className="breakers_each_t">
              <p>{name}}</p>
              <p>{move}</p>
              <div className="br" />
            </div>
          </div>
        );
      });
    }
  }

  render() {
    return this.renderBreakers();
  }
}

const mapStateToProps = state => {
  return { gridStatus: state };
};

export default connect(
  mapStateToProps,
  { getBreaker: getBreaker }
)(Breakers);
