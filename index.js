// Code your solution in this file!
// const drivers = [
//   { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
//   { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
//   { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
//   { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
//   { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
// ];

// for (const element of myArray) {
//     console.log(element);
// }
function logDriverNames(drivers){
  for (const driver of drivers){
    console.log(driver.name)
  }
}


function logDriversByHometown(drivers, place){
  for (const driver of drivers){
    if(driver.hometown === place)
    {
      console.log(driver.name)
    }
  }
}


function driversByRevenue(drivers){
  const newDrivers = drivers.slice();
  return newDrivers.sort(function (a, b) {
    return a.revenue - b.revenue
  });
return newDrivers;
}



function driversByName(drivers){
  newDrivers = drivers.slice();
  return newDrivers.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
  return newDrivers
}

function totalRevenue(drivers){
  let object = drivers.reduce(function (a, b) {
    return {revenue: a.revenue + b.revenue}; // returns object with property x
  })
  return object.revenue
}

function averageRevenue(drivers){
  return (totalRevenue(drivers) / drivers.length)
}
