import React, { Component } from "react";
import "antd/dist/antd.css";
import { Breadcrumb, Alert } from "antd";
import Nav from "./nav";
import axios from "axios";

var url = "http://localhost:9090/cars/";
class deletecar extends Component {
  state = {
    id: 0,
    brand: "",
    price: 0
  };
  handleChagne = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  edit = async () => {
    let res = await axios.put(url + this.state.id, {
      brand: this.state.brand,
      price: this.state.price
    });
    if (res.data.message == "Succeed") {
      alert("edit car succeed");
    } else {
      alert("edit car fail");
    }
  };
  render() {
    return (
      <div>
        <Nav />
        <div style={{ marginLeft: 100, marginRight: 100 }}>
          <h3> id :</h3>
          <input name="id" type="number" onChange={this.handleChagne} />
          <h3> brand :</h3>
          <input name="brand" type="text" onChange={this.handleChagne} />
          <h3> price :</h3>
          <input name="price" type="number" onChange={this.handleChagne} /><br/>
          <button
            onClick={() => {
              this.edit();
            }}
          >
            EDIT CAR
          </button>
        </div>
      </div>
    );
  }
}

export default deletecar;
