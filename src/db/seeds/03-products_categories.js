const productsCategories = require("../fixtures/productsCategories");

exports.seed = function(knex) {
  return knex
    .raw("truncate table products_categories restart identity cascade")
    .then(function () {
      return knex("products_categories").insert(productsCategories);
    });
};
