const data = require('../data/zoo_data');

function isManager(id) {
  const managers = ['0e7b460e-acf4-4e17-bcb3-ee472265db83',
    'fdb2543b-5662-46a7-badc-93d960fdc0a8',
    '9e7d4524-363c-416a-8759-8aa7e50c0992'];
  return managers.includes(id);
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    return data.employees.filter((employee) => employee.managers.includes(managerId))
      .map((employee) => `${employee.firstName} ${employee.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
