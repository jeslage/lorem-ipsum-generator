/* eslint-disable no-underscore-dangle */
require("dotenv").config();

const fetch = require("node-fetch");

const fs = require("fs");

const url = "http://localhost:8000/graphql";

fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true
  },
  body: JSON.stringify({
    variables: {},
    query: `
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `
  })
})
  .then(result => result.json())
  .then(result => {
    // here we're filtering out any type information unrelated to unions or interfaces
    const filteredData = result.data.__schema.types.filter(
      type => type.possibleTypes !== null
    );
    // eslint-disable-next-line no-param-reassign
    result.data.__schema.types = filteredData;

    fs.writeFileSync(
      "./graphql/schema.json",
      JSON.stringify(result.data, null, 2),
      err => {
        if (err) {
          console.error("Error writing schema file", err);
        } else {
          console.log("Schema successfully extracted!");
        }
      }
    );
  });
