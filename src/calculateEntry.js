const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const children = entrants.filter((person) => person.age < 18).length;
  const adults = entrants.filter((person) => person.age >= 18 && person.age < 50).length;
  const seniors = entrants.filter((person) => person.age >= 50).length;
  return {
    child: children,
    adult: adults,
    senior: seniors,
  };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const count = countEntrants(entrants);

  return (count.child * data.prices.child)
    + (count.adult * data.prices.adult)
    + (count.senior * data.prices.senior);
}

module.exports = { calculateEntry, countEntrants };
