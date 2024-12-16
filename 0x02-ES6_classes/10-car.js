const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');

class Car {
  constructor(brand, motor, color) {
    this[_brand] = brand;
    this[_motor] = motor;
    this[_color] = color;
  }

  // Method to clone the car object
  cloneCar() {
    // Create a new instance of the same class (subclass)
    const cloned = new this.constructor(this[_brand], this[_motor], this[_color]);
    return cloned;
  }

  // Getter methods to access private properties
  getBrand() {
    return this[_brand];
  }

  getMotor() {
    return this[_motor];
  }

  getColor() {
    return this[_color];
  }
}

export default Car;
