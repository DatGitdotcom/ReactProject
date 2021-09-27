import React, { Component } from "react";
import axios from "axios";

export class UserHome extends Component {
  componentWillMount() {
    const config = {
      headera: { Autherization: "Bearer" + localStorage.getItem("token") },
    };
    axios
      .get("http://localhost:4000/api/User", config)
      .then((res) => console.log(res));
  }
  Logout = async (event) => {
    event.preventDefault();

    await axios.post("http://localhost:4000/api/Logout").then((res) => {
      console.log("success", res);
    });
  };

  render() {
    return (
      <div>
        <h1>User not logged in</h1>

        <button onClick={this.Logout}> LogOut</button>
      </div>
    );
  }
}

export default UserHome;
