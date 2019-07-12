import React, { Component } from "react";
import "antd/dist/antd.css";
import { Breadcrumb, Alert } from "antd";
import Nav from "./nav";
import axios from "axios";

var url = "http://localhost:9090/cars/";
class findcar extends Component {
  state = {
    id: 0
  };
  handleChagne = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  find = async () => {
    let res = await axios.get(url + this.state.id);
    if (res.data.message == "Succeed") {
      alert(
        "Found!! brand : " +
          res.data.found.brand +
          " price : " +
          res.data.found.price
      );
    } else {
      alert("Not found!!");
    }
  };
  render() {
    return (
      <div>
        <Nav />
        <div style={{ marginLeft: 100, marginRight: 100 }}>
          <h3> id :</h3>
          <input name="id" type="number" onChange={this.handleChagne} /><br/>
          <button
            onClick={() => {
              this.find();
            }}
          >
            FIND CAR
          </button>
        </div>
      </div>
    );
  }
}

export default findcar;
