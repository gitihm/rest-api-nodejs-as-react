import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "antd/dist/antd.css";
import { Menu, Icon } from "antd";

const { SubMenu } = Menu;

class nav extends Component {
  state = {
    current: ""
  };

  handleClick = async e => {
    console.log("click ", e);
    e.domEvent.preventDefault();
    await this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="1">
            <Icon type="home" />
            Home<Link to="/" />
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="file-add" />
            ADDCAR <Link to="/add" />
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="file-excel" />
            DELETECAR <Link to="/delete" />
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="file-search" />
            FINDCAR <Link to="/find" />
          </Menu.Item>
          <Menu.Item key="5">
            <Icon type="file-text" />
            EDITCAR<Link to="/edit" />
          </Menu.Item>
        </Menu>
        {/* <ul>
        <li><Link to="/"><h3  >Home</h3></Link></li>
        <li><Link to="/add"><h3  >ADDCAR</h3></Link></li> 
        <li><Link to="/delete"><h3  >DELETECAR</h3></Link></li>
        <li><Link to="/find"><h3  >FINDCAR</h3></Link></li>
        <li><Link to="/edit"><h3  >EDITCAR</h3></Link></li>
      </ul> */}
      </div>
    );
  }
}

export default withRouter(nav);
