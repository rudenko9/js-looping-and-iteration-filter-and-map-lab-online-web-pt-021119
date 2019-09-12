// Code your solution here:
function driversWithRevenueOver(list, amount) {
 return list.filter(driver => driver['revenue'] > amount);
}


function driverNamesWithRevenueOver(list, amount) {

  return list.map(function(driver) {
    return driver['revenue'] > amount})
    
}

function exactMatch(list, propertyMatch) {
  return list.filter(driver => driver[Object.keys(propertyMatch)[0]] === Object.values(propertyMatch)[0]);
}

function exactMatchToList(list, propertyMatch) {
  filteredList = exactMatch(list, propertyMatch);
  return filteredList.map(driver => driver.name);
}