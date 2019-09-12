// Code your solution here:
function driversWithRevenueOver(list, amount) {
 return list.filter(driver => driver['revenue'] > amount);
}


function driverNamesWithRevenueOver(list, revenue) {
  return list
      .filter(function (driver){
      return driver.revenue > revenue
      })
      .map(function(driver){
        return driver.name
      })
 
}

function exactMatch(list, propertyMatch) {
  return list.filter(driver => driver[Object.keys(propertyMatch)[0]] === Object.values(propertyMatch)[0]);
}

