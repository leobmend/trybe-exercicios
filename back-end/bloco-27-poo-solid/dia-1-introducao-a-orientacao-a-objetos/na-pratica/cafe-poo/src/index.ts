import { Customer, Item, Order } from './classes';

const customerA = new Customer('Jane');
const customerB = new Customer('John');


const itemA = new Item('Coffe', 2.5);
const itemB = new Item('Snack', 7.5);

const orderA = new Order(customerA, [itemA, itemB], 0.15);
const orderB = new Order(customerB, [itemB]);

console.log(orderA.getTotal());
console.log(orderB.getTotal());
