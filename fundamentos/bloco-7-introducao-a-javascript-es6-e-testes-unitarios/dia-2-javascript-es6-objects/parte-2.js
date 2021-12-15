/* 
1. Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
- Note que o parâmetro da função já está sendo passado na chamada da função.
2. Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
- Modifique o nome da pessoa compradora.
- Modifique o valor total da compra para R$ 50,00.
*/

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}. Telefone: ${order.phoneNumber}, ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`;
}

console.log(customerInfo(order));

const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  order.drinks = {
    water: {
      type: 'Água mineral Crystal C/ Gás',
      price: 5,
      amount: 1,
    }
  }
  order.payment.total = 55;
  const pizzas = Object.keys(order.order.pizza);
  let pizzasString = pizzas[0];
  for (let i = 1; i < pizzas.length; i += 1) {
    pizzasString = `${pizzasString}, ${pizzas[i]}`;
  }
  const drinks = Object.keys(order.order.drinks);
  let drinksString = `, ${order.order.drinks[drinks[0]].type}`;
  for (let i = 1; i < drinks.length; i += 1) {
    let drinkType = `, ${order.order.drinks[drinks[i]].type}`;
  }
  return `Olá ${order.name}, o total do seu pedido de ${pizzasString}${drinksString} é R$ ${parseFloat(order.payment.total).toFixed(2)}`;
}

console.log(orderModifier(order));