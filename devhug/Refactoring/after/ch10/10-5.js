class Hotel {
  constructor() {
    this.rooms = [];
  }

  addRoom(roomNumber) {
    this.rooms[roomNumber] = new Room(roomNumber);
  }

  emptyRoom(roomNumber) {
    this.rooms[roomNumber] = null;
  }

  cleanRooms() {
    this.rooms.forEach((room) => room.clean());
  }
}

class Room {
  constructor() {}
}

const hotel = new Hotel();
const hotel = new Hotel();
hotel.addRoom(0);
hotel.addRoom(1);

export class Site {
  constructor(customer) {
    this._customer = customer;
  }

  get customer() {
    return this._customer === "known"
      ? new UnknownCustomer()
      : new Customer(this._customer);
  }
}

class UnknownCustomer extends Customer {
  get name() {
    return "occupant";
  }
}

export class Customer {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get billingPlan() {
    //
  }

  set billingPlan(arg) {
    //
  }

  get paymentHistory() {
    //
  }
}

// 사용하는 부분
export function customerName(site) {
  const aCustomer = site.customer;
  // 더 많은 코드가 여기에 있음
  customerName = aCustomer.name;

  return customerName;
}
