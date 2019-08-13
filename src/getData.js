require("dotenv").config();
const axios = require("axios");
const url = process.env.APIURL;

export async function getData() {
  let response = await axios({
    method: "get",
    url:
      "https://cors-anywhere.herokuapp.com/https://spacelaunchnow.me/api/3.3.0/launch/previous/",
    params: { limit: 100 }
  });
  let prevLaunches = await response.data;

  // let response2 = await axios({
  //   method: "get",
  //   url: "https://api.spacexdata.com/v3/launchpads"
  // });
  // let locations = await response2.data;

  return { prevLaunches /*locations*/ };
}
