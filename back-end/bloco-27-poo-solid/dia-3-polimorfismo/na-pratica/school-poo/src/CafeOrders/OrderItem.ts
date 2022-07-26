export default class OrderItem {
  constructor(private _name: string, private _price: number) {
    this.name = _name;
    this.price = _price;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error('The item name must be at least 3 characters long.');
    }
    this._name = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    if (value < 0) throw new Error('The price must be positive.');
    this._price = value;
  }
}