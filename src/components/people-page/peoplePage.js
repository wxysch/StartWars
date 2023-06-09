import { Component } from "react";
import ItemDetails from "../person-details/item-details";
import ItemList from "../item -list/item-list";
import SwapiServices from "../../fetch";
import ErrorIndicator from "../ErrorIndicator/errorIndicator";
import ErrorBoundry from "../ErrorIndicator/errorBoundry";
import Row from "../row/row";
export default class PeoplePage extends Component {
  swapiServices = new SwapiServices();
  state = {
    selectedItem: null,
    hasError: false,
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };
  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    const itemList = (
      <ErrorBoundry><ItemList
        onitemselected={this.onItemSelected}
        getData={this.swapiServices.getAllPeople}
        renderItem={({ name, birthYear }) => `${name}(${birthYear})`}
      /></ErrorBoundry>
      
    );

    const personDetails = (
      <ErrorBoundry>
        <ItemDetails getData={this.swapiServices.getPerson} itemId={this.state.selectedItem} />
      </ErrorBoundry>
    );

    return (
      <ErrorBoundry>
        <Row left={itemList} rigth={personDetails} />
      </ErrorBoundry>
    );
  }
}
