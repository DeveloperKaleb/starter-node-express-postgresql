const products = require("../fixtures/products");

exports.seed = function(knex) {
  return knex
    .raw("truncate table products restart identity cascade")
    .then(function () {
      return knex("products").insert(products);
    });
};
