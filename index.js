// Code your solution here:
function driversWithRevenueOver(list, amount) {
 return list.filter(driver => driver['revenue'] > amount);
}


function driverNamesWithRevenueOver(list, amount) {
  filteredList = driversWithRevenueOver(list, amount);
  return filteredList.map(driver => driver.name);
}