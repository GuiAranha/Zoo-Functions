const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return data.species.reduce((acc, curr) => ({ ...acc, [curr.name]: curr.residents.length }), {});
  }
  if (animal.sex === undefined) {
    return data.species.find((specie) => specie.name === animal.specie).residents.length;
  }
  return data.species.find((specie) => specie.name === animal.specie).residents
    .filter((specie) => specie.sex === animal.sex).length;
}

module.exports = countAnimals;
