const suppliers = require("../fixtures/suppliers");

exports.seed = function(knex) {
  return knex
    .raw("truncate table suppliers restart identity cascade")
    .then(function () {
      return knex("suppliers").insert(suppliers);
    });
};
