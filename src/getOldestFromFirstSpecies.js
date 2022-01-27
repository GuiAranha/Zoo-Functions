const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const getFirstSpecie = data.employees.find((person) => person.id === id)
    .responsibleFor[0];

  const getSpecie = data.species.find((specie) => specie.id === getFirstSpecie);

  const oldest = getSpecie.residents.reduce((acc, curr) => {
    if (curr.age > acc) {
      return curr.age;
    }
    return acc;
  }, 0);

  const oldestAnimal = getSpecie.residents.find((res) => res.age === oldest);
  return Object.values(oldestAnimal);
}

module.exports = getOldestFromFirstSpecies;
