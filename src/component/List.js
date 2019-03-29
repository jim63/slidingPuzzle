import React, { Component } from "react";
import { connect } from "react-redux";
import { delList, pendingList } from "../actions";

class List extends Component {
  delList = e => {
    e.preventDefault();
    e.stopPropagation();
    console.log("e", e.target.getAttribute("data-key"));
    this.props.delList(e.target.getAttribute("data-key"));
  };

  pendingList = e => {
    this.props.pendingList(e.target.getAttribute("data-key"));
  };

  renderList() {
    console.log("route", this.props.routeStatus);

    if (this.props.routeStatus == "1") {
      return this.props.lists.lists.map(({ text, id, status }) => {
        if (status == 1) {
          return (
            <li key={id} data-key={id} onClick={this.pendingList}>
              {text}{" "}
              <span onClick={this.delList} data-key={id}>
                <i className="far fa-angry" data-key={id} />
              </span>
            </li>
          );
        }
      });
    }

    if (this.props.routeStatus == "2") {
      return this.props.lists.lists.map(({ text, id, status }) => {
        if (status == 2) {
          return (
            <li
              key={id}
              data-key={id}
              onClick={this.pendingList}
              className="done"
            >
              {text}{" "}
              <span onClick={this.delList} data-key={id}>
                <i className="far fa-angry" data-key={id} />
              </span>
            </li>
          );
        }
      });
    }

    return this.props.lists.lists.map(({ text, id, status }) => {
      if (status == 2) {
        return (
          <li
            key={id}
            data-key={id}
            onClick={this.pendingList}
            className="done"
          >
            {text}{" "}
            <span onClick={this.delList} data-key={id}>
              <i className="far fa-angry" data-key={id} />
            </span>
          </li>
        );
      } else {
        return (
          <li key={id} data-key={id} onClick={this.pendingList}>
            {text}{" "}
            <span onClick={this.delList} data-key={id}>
              <i className="far fa-angry" data-key={id} />
            </span>
          </li>
        );
      }
    });
  }

  render() {
    return <ul>{this.renderList()}</ul>;
  }
}

const mapStateToProps = state => {
  return { lists: state };
};

export default connect(
  mapStateToProps,
  { delList: delList, pendingList: pendingList }
)(List);
