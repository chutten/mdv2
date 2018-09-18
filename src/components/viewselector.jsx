import React, {Component} from "react";
import {Tabs, Tab} from "react-bootstrap";
import {SummaryView} from "./summaryview.jsx";
import {DistributionView} from "./distributionview.jsx";
import {ComparisonView} from "./comparisonview.jsx";

export class ViewSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "summary",
    };

    // Ensure we use the component's `this`
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(key) {
    this.setState({key});
  }

  render() {
    return (
      <div className="view-selector">
        <Tabs
          activeKey={this.state.key}
          onSelect={this.handleSelect}
          id="view-tabs"
        >
          <Tab
            eventKey={"summary"}
            title={<span><i className="fas fa-chart-pie"></i> Summary</span>}
          >
            <SummaryView
              dataStore = {this.props.dataStore}
              changeTab={this.handleSelect}
            />
          </Tab>
          <Tab
            eventKey={"distribution"}
            title={<span><i className="far fa-chart-bar"></i> Distribution</span>}
          >
            <DistributionView
              dataStore = {this.props.dataStore}
            />
          </Tab>
          <Tab
            eventKey={"comparison"}
            title={<span><i className="fas fa-chart-area"></i> Comparison</span>}
          >
            <ComparisonView
              dataStore = {this.props.dataStore}
            />
          </Tab>
        </Tabs>
      </div>
    );
  }
}
