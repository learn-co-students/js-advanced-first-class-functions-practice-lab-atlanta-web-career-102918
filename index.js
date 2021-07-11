// Code your solution in this file!
const logDriverNames = function(arr) {
  arr.forEach(({ name }) => {
    console.log(name);
  });
};

const logDriversByHometown = function(driversArray, location) {
  driversArray.forEach(function({ name, hometown }) {
    hometown === location ? console.log(name) : null; 
    // debugger;
  });
};

const driversByRevenue = function(drivers) {
  return drivers.slice().sort((a, b) => {
    return a.revenue - b.revenue;
  });
};

const driversByName = function(drivers) {
  return drivers.slice().sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
};

const totalRevenue = function(drivers) {
  console.log(drivers);
  return drivers.reduce(function(accumulator, currentValue) {
    console.log("Acc:", accumulator, 'Cur:', currentValue.revenue);
    return accumulator + currentValue.revenue;
  }, 0);
};

const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length;
};