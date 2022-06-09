const knex = require("../db/fixtures/connection");

function list() {
  return knex("products").select("*");
}

function read(productId) {
  return knex("products").select("*").where({ product_id: productId }).first();
}

module.exports = {
  list,
};
