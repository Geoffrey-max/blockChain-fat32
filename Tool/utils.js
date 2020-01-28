const axios = require("axios");
const sha256 = require("sha256")

function getPages(start, end) {
  return axios.get(
    "http://reader-challenge.herokuapp.com/reader/" + start + "/" + end,
    response => {
      return response.data;
    }
  );
}

function findPow(element) {
  return sha256(JSON.stringify(element));
}

module.exports = { getPages, findPow };
