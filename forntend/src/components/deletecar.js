import React, { Component } from "react";
import "antd/dist/antd.css";
import { Breadcrumb, Alert } from "antd";
import Nav from "./nav";
import axios from "axios";

var url = "http://localhost:9090/cars/";

class deletecar extends Component {
  state = {
    id: 0
  };
  handleChagne = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  delete = async () => {
    let res = await axios.delete(url + this.state.id);
    if (res.data.message == "Succeed") {
      alert("Delete car succeed");
    } else {
      alert("Delete car fail");
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
              this.delete();
            }}
          >
            DELETE CAR
          </button>
        </div>
      </div>
    );
  }
}

export default deletecar;
