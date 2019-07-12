import React, { Component } from "react";
import "antd/dist/antd.css";
import axios from "axios";
import { Breadcrumb, Alert } from "antd";
import Nav from "./nav";

var url = "http://localhost:9090/cars/";

class main extends Component {
  state = {
    cars: []
  };
  componentDidMount = async () => {
    await axios.get(url).then(res => {
      this.setState({
        cars: res.data
      });
    });
  };
  renderCar = () => {
    return this.state.cars.map((cars, index) => (
      <li key={index}>
        {" "}
        {cars.id} {cars.brand} {cars.price}{" "}
      </li>
    ));
  };
  render() {
    return (
      <div>
        <Nav />
        <div style={{ marginLeft: 100, marginRight: 100 }}>
          >
          <ul>
            <h1>{this.renderCar()}</h1>
          </ul>
        </div>
      </div>
    );
  }
}

export default main;
