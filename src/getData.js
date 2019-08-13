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

  return { prevLaunches };
}

export async function getSpecs(query) {
  let theQuery = query;
  theQuery.limit = 100;
  let response = await axios({
    method: "get",
    url:
      "https://cors-anywhere.herokuapp.com/https://spacelaunchnow.me/api/3.3.0/launch/previous/",
    params: theQuery
  });
  let answerToQuery = await response.data;

  return { answerToQuery };
}
