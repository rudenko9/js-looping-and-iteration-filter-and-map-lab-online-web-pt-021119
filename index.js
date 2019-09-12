// Code your solution here:
function driversWithRevenueOver(list, amount) {
 return list.filter(driver => driver['revenue'] > amount);
}


function driverNamesWithRevenueOver(list, amount) {

  return driversWithRevenueOver.map(driver => driver.name);
}