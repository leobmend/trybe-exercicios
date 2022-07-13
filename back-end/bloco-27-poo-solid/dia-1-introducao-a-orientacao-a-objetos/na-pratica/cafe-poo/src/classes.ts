export class Customer {
  private _name: string;
  
  constructor(name: string) {
    this._name = name;
  }
}

export class Item {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  get price() {
    return this._price;
  }
}

export class Order {
  private _customer: Customer;
  private _items: Item[];
  private _descount?: number;

  constructor(customer: Customer, items: Item[], descount?: number) {
    this._customer = customer;
    this._items = items;
    this._descount = descount;
  }

  private getTotalWithoutDiscount() {
    return this._items
      .map((item: Item) => item.price)
      .reduce((sum: number, price: number) => sum + price);
  }

  public getTotal() {
    return this.getTotalWithoutDiscount() * (1 - (this._descount || 0));
  }
}
