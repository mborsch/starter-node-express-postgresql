const path = require("path");
require("dotenv").config();
const { DATABASE_URL } = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      host: "127.0.0.1",
      user: "uswgwjoh",
      password: "caNATWwhufW16NOTudciBExdEIhI3qtv",
      database: "uswgwjoh",
      charset: "utf8",
    },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
};
