import Order from "./CafeOrders/Order";
import OrderItem from "./CafeOrders/OrderItem";
import OrderRepository from "./CafeOrders/OrderRepositoy";
import Evaluation from "./Evaluations/Evaluation";
import EvaluationResult from "./Evaluations/EvaluationResult";
import Exam from "./Evaluations/Exam";
import Work from "./Evaluations/Work";
import { Employee } from "./Persons/Employee";
import Student from "./Persons/Student";
import Teacher from "./Persons/Teacher";

// const john = new Student('John', new Date(2000, 10, 30));
// const joseph = new Employee('Joseph', new Date(1985, 5, 3), 3000);
// const jane = new Teacher('Jane', new Date(1990, 1, 10), 2000, 'Math');

// console.log(john.birthDate);
// console.log(joseph.birthDate);
// console.log(jane.birthDate);

// const exam = new Exam(25, jane);
// const work = new Work(50, jane);
// console.log(exam.score);
// console.log(work.score);

// console.log();

// const examResult = new EvaluationResult(exam, 0);
// const workResult = new EvaluationResult(work, 20);

// try {
//   const studentB = new Student(
//     'Janice',
//     new Date(1999),
//     undefined,
//     [workResult, workResult, workResult, workResult, examResult],
//   );
// } catch (err: any) {
//   console.log(err.message);
// }

// console.log()

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, 'Math');
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, 'History');

const examMath = new Exam(25, marta);
const workMath = new Work(50, marta);
const examHistory = new Exam(25, joao);
const workHistory = new Work(50, joao);

carolina.addEvaluationResult(new EvaluationResult(examMath, 23));
carolina.addEvaluationResult(new EvaluationResult(examMath, 25));
carolina.addEvaluationResult(new EvaluationResult(workMath, 42));
carolina.addEvaluationResult(new EvaluationResult(examMath, 25));
carolina.addEvaluationResult(new EvaluationResult(examMath, 20));
carolina.addEvaluationResult(new EvaluationResult(workMath, 50));

console.log('Avaliações: ', carolina.evaluationsResults);
console.log('Média das notas: ', carolina.gradesAverage());

lucas.addEvaluationResult(new EvaluationResult(examHistory, 25));
lucas.addEvaluationResult(new EvaluationResult(examHistory, 22));
lucas.addEvaluationResult(new EvaluationResult(workHistory, 35));
lucas.addEvaluationResult(new EvaluationResult(examHistory, 20));
lucas.addEvaluationResult(new EvaluationResult(examHistory, 20));
lucas.addEvaluationResult(new EvaluationResult(workHistory, 39));

console.log('Avaliações: ', lucas.evaluationsResults);
console.log('Média das notas: ', lucas.gradesAverage());

const sandwich = new OrderItem('Sanduíche Natural', 5.00);
const juice = new OrderItem('Suco de Abacaxi', 5.00);
const dessert = new OrderItem('Gelatina de Uva', 2.50);

const carolinaOrder = new Order(carolina, [sandwich, juice, dessert], 'dinheiro', 0.10);
const lucasOrder = new Order(lucas, [sandwich, juice], 'dinheiro', 0.10);
const martaOrder = new Order(marta, [sandwich, juice], 'cartão');
const joaoOrder = new Order(joao, [sandwich, juice, dessert], 'cartão');

const orderRepository = new OrderRepository();
orderRepository.addOrder(carolinaOrder);
orderRepository.addOrder(lucasOrder);
orderRepository.addOrder(martaOrder);
orderRepository.addOrder(joaoOrder);
orderRepository.addOrder(carolinaOrder);

console.log('Pedidos da Carolina: ', orderRepository.listByClient(carolina));
console.log('Maior valor para o menor: ', orderRepository.listBySortedValue('maior'));
console.log('Menor valor para o maior: ', orderRepository.listBySortedValue('menor'));