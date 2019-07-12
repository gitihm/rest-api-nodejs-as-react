import React, { Component } from "react";
import "antd/dist/antd.css";
import './App.css'
import { Breadcrumb, Alert } from "antd";
import Nav from "./nav";
import axios from "axios";

var url = "http://localhost:9090/cars/";

class addcar extends Component {
  state = {
    brand: "",
    price: 0
  };
  handleChagne = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  add = async () => {
    let res = await axios.post(url, {
      brand: this.state.brand,
      price: this.state.price
    });
    if (res.data.message == "Succeed") {
      alert("Add car succeed");
    }
  };
  render() {
    return (
      <div>
        <Nav />
        <div style={{ marginLeft: 100, marginRight: 100  }} className="App">
          <h3> brand :</h3>
          <input name="brand" type="text" onChange={this.handleChagne} />
          <h3> price :</h3>
          <input name="price" type="number" onChange={this.handleChagne} /><br/>
          <button
            onClick={() => {
              this.add();
            }}
          >
            ADD CAR
          </button>
        </div>
      </div>
    );
  }
}

export default addcar;
