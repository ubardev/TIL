class Organization {
  #data;
  #name;
  #country;

  constructor(data) {
    this.#data = data;
    this.#name = data.name;
    this.#country = data.country;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    this.#name = value;
  }

  get country() {
    return this.#country;
  }

  set country(value) {
    this.#country = value;
  }

  get rowData() {
    return { ...this.#data } // 얕은 복사, lodash의 cloneDeep 이용해 깊은 복사 사용
    // return { name: this.name, country: this.country  }
  }
}

const organization = new Organization({
  name: 'Acme Gooseberries', country: 'GB'
});

organization.name = 'Dream Coding';
console.log(organization.name);
console.log(organization.country);
