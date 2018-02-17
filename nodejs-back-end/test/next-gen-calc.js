const helpers = require( '../bin/_helpers' );

const generation = [
  [1, 0, 0, 0, 0],
  [0, 1, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];

const nextGeneration = helpers.createNextGeneration( generation );

console.log( nextGeneration );

