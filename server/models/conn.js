const pgp = require("pg-promise")({
  query: e => {
    console.log("\nQUERY:", e.query);
  }
});

const options = {
  host: "localhost",
  database: "smart",
};

const db = pgp(options);

module.exports = db;