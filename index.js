// Code your solution in this file!
const logDriverNames = function(drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name)
  })
};

const logDriversByHometown = function(drivers, hometown) {
  drivers.forEach(function (driver) {
    if (driver.hometown === hometown) {
    console.log(driver.name)
    }
  })
};

const driversByRevenue = function(drivers) {
  let newArray = []
  drivers.forEach(function(driver) {
    newArray.push(driver)
  })
  return newArray.sort(function (rev1, rev2) {
    return rev1.revenue - rev2.revenue;
  })
};

const comparator = function (a, b) {
    return a.name.localeCompare(b.name);
};

const driversByName = function(drivers) {
  let newArray = [];
  drivers.forEach(function(driver) {
    newArray.push(driver)
  });
  return newArray.sort(comparator);
};


const totalRevenue = function(drivers) {
  let initialValue = 0;
  return drivers.reduce(function (acc, driver) {
    return acc + driver.revenue;
  }, initialValue)
};

const averageRevenue = function(drivers) {
  return totalRevenue(drivers)/drivers.length
}
