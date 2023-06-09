import React, { Component } from "react";
import "./item-list.css";
import SwapiServices from "../../fetch";
import Spinner from "../spinner/spinner";

export default class ItemList extends Component {
  swapiServices = new SwapiServices();

  state = {
    itemList: null,
  };
  componentDidMount() {
    const { getData } = this.props;
    getData().then((itemList) => {
      this.setState({
        itemList,
      });
    });
  }

  renderItems(arr) {
    return arr.map((item) => {
      const { id } = item;
      const label = this.props.renderItem(item);

      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onitemselected(id)}
        >
          {label}
        </li>
      );
    });
  }
  render() {
    const { itemList } = this.state;
    if (!itemList) {
      return <Spinner />;
    }
    const items = this.renderItems(itemList);
    return <ul className="Item-list list-group">{items}</ul>;
  }
}
