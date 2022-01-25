const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const older = data.species.find((specie) =>
    specie.name === animal).residents.every((specie) =>
    specie.age >= age);
  return older;
}

module.exports = getAnimalsOlderThan;
