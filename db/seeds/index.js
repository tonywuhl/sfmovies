'use strict';

const Locations = require('./data/locations');
const Movies    = require('./data/movies');

exports.seed = function (Knex) {
  return Promise.all([
    Knex('movies').truncate(),
    Knex('locations').truncate()
  ])
  .then(() => {
    return Promise.all([
      Knex('movies').insert(Movies),
      Knex('locations').insert(Locations)
    ]);
  });

};
