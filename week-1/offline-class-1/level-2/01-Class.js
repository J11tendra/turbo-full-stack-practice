class Animal {
  constructor(name, legCount) {
    this.name = name;
    this.legCount = legCount;
  }
  describe(hobby) {
    return `${this.name} has ${this.legCount} legs and loves ${hobby}`;
  }
}

let dogMark = new Animal("mark", 4).describe("music");
console.log(dog);
