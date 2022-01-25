const data = require('../data/zoo_data');

const species = (ids) => data.species.filter((specie) => ids.includes(specie.id));

function getSpeciesByIds(...ids) {
  return species(ids);
}

module.exports = getSpeciesByIds;
