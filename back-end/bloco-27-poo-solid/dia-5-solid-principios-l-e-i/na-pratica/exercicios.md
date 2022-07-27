# Exercícios

> Exercícios 1-3: O programa retorna informações relacionadas ao cep de uma pessoa e tem duas funcionalidades: Consultar um endereço a partir de um cep e um número de um logradouro. Consultar um cep a partir de um endereço e um número de um logradouro.

## Exercício 1:

Aplique a técnica de injeção de dependência para que a classe CepService diminua seu nível de acoplamento com a dependência FooCepAPI.
Dica: [Um Guia sobre Injeção e Inversão de Dependências em Node.js e TypeScript](https://dev.to/oieduardorabelo/um-guia-sobre-injecao-e-inversao-de-dependencias-em-node-js-e-typescript-1bod)

## Exercício 2:

A classe CepService ainda depende de uma implementação concreta para as chamadas da Api e CEP. Aplique o princípio da Inversão de dependência para fazer com que a classe CepService fique completamente desacoplada.

## Exercício 3:

Implemente uma classe MockCepApi usada para realização de testes unitários. Obs: Você não precisa realizar os testes.

> Exercícios 4-6: O objetivo do programa é modelar o comportamento de veículos. Inicialmente, supõe-se que há apenas um tipo de veículo que voa(fly) e move(drive) definido por IVehicle e implementado em FuturisticCar.

## Exercício 4:

Implemente um novo tipo de veículo com a classe Car a partir da interface existente. Esse veículo deve somente ser capaz se mover.

## Exercício 5:

Implemente um novo tipo de veículo com a classe AirPlane a partir da interface existente. Esse veículo deve somente ser capaz de voar.

## Exercício 6

Aplique o Princípio da Segregação de Interfaces com o objetivo de separar a implementação de cada tipo de veículo.
