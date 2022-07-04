export function plumages(birds) {
  let map = birds.map((b) => [b.name, b.plumage]);
  let map1 = new Map(map);
  return map1;
}
export function speeds(birds) {
  return new Map(birds.map((b) => [b.name, b.airSpeedVelocity]));
}

class Bird {
  #name;
  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  get plumage() {
    return 'unknown';
  }

  get airSpeedVelocity() {
    return null;
  }
}

class EuropeanSwallow extends Bird {
  constructor() {
    super('EuropeanSwallow');
  }

  get plumage() {
    return 'average';
  }

  get airSpeedVelocity() {
    return 35;
  }
}

class AfricanSwallow extends Bird {
  constructor() {
    super('AfricanSwallow');
  }

  get plumage() {
    return bird.numberOfCoconuts > 2 ? 'tired' : 'average';
  }

  get airSpeedVelocity() {
    return 40 - 2 * bird.numberOfCoconuts;
  }
}

class NorwegianBlueParrot extends Bird {
  constructor() {
    super('NorwegianBlueParrot');
  }

  get plumage() {
    return bird.voltage > 100 ? 'scorched' : 'beautiful';
  }

  get airSpeedVelocity() {
    return bird.isNailed ? 0 : 10 + bird.voltage / 10;
  }
}

const result = plumages([new NorwegianBlueParrot(), new AfricanSwallow()]);
console.log('result ==========> ', result);
