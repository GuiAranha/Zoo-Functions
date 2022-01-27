const data = require('../data/zoo_data');

/* const find = (location) => data.species.filter((specie) => specie.location === location)
  .map((specie) => specie.name); */
const locations = ['NE', 'NW', 'SE', 'SW'];
const getSpecies = (location) => data.species.filter((specie) => specie.location === location);
const animals = locations.map((location) => getSpecies(location));

const getAnimalsByRegion = () => animals.reduce((acum, species, index) => (
  { ...acum, [locations[index]]: species.map((specie) => specie.name) }), {});

const getAnimalsNames = () => animals.reduce((acum, species, ind) => (
  { ...acum,
    [locations[ind]]: species.map((specie) => ({
      [specie.name]: specie.residents.map((animal) => animal.name) })),
  }), {});

const getAnimalsNamesSex = (sex) => animals.reduce((acum, species, ind) => (
  { ...acum,
    [locations[ind]]: species.map((specie) => ({
      [specie.name]: specie.residents.filter((animal) => animal.sex === sex)
        .map((animal) => animal.name) })),
  }), {});

const getAnimalsNamesSexSort = (sex) => animals.reduce((acum, species, ind) => (
  { ...acum,
    [locations[ind]]: species.map((specie) => ({
      [specie.name]: specie.residents.filter((animal) => animal.sex === sex)
        .map((animal) => animal.name).sort() })),
  }), {});

const getAnimalsNamesSort = () => animals.reduce((acum, species, ind) => (
  { ...acum,
    [locations[ind]]: species.map((specie) => ({
      [specie.name]: specie.residents.map((animal) => animal.name).sort() })),
  }), {});

function sexAndSorted(options) {
  if (!options.sex) {
    if (!options.sorted) {
      return getAnimalsNames();
    }
    return getAnimalsNamesSort();
  }
  if (!options.sorted) {
    return getAnimalsNamesSex(options.sex);
  }
  return getAnimalsNamesSexSort(options.sex);
}

function getAnimalMap(options) {
  if (options === undefined || !options.includeNames) {
    return getAnimalsByRegion();
  }
  return sexAndSorted(options);
}

module.exports = getAnimalMap;
