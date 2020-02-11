#!/usr/bin/node

const request = require('request');
const urlApi = process.argv[2];

request(urlApi, function (error, response, body) {
  if (error) {
    console.error(error); // Print the error if one occurred
  }
  const jsonObj = JSON.parse(body);
  const newDict = {};
  let key = '';

  for (let i = 0; i < jsonObj.length; i++) {
    key = jsonObj[i].userId.toString();
    if (!newDict[key]) {
      newDict[key] = 0;
    }
    if (jsonObj[i].completed === true) {
      newDict[key] += 1;
    }
  }

  console.log(newDict);
});
