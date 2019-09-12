// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  for (const driver of drivers) {
    if (driver.revenue === revenue){
      console.log(driver.name)
    }
    
  }
  
}