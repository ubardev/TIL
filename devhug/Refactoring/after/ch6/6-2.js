// 예제 1
export function rating(driver) {
  return driver.numberOfLateDeliveries ? 2 : 1;
}

// 예제 2
function reportLines(customer) {
  const resule = [];
  resule.push(["name", customer.name]);
  resule.push(["location", customer.location]);
  return resule;
}
