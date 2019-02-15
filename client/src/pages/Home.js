import React, { Component } from "react";
import Body from "../components/Body/Index";
import API from "../utils/API";

class Home extends Component {

  light = () => {

    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    };

    API.buzzer(config)
      .then(function() {
        console.log("Finished");
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Body
        buzz= {this.light}
        />
      </div>
    );
  }
}

export default Home;
