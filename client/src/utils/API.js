import axios from "axios";

export default {
  buzzer: function(config) {
    return axios.get("https://69.120.124.59:5050/buzz", config)  }
  };
 