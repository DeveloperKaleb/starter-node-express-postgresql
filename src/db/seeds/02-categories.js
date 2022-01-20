const categories = require("../fixtures/categories");

exports.seed = function(knex) {
  return knex
    .raw("truncate table categories restart identity cascade")
    .then(function () {
      return knex("categories").insert(categories);
    });
};
