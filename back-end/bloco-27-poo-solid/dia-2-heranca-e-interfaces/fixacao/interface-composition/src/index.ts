// INTERFACE

interface MyInterface {
  myNumber: number;
  myFunc: (myParam: number) => string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {}

  myFunc(myParam: number): string {
    const sum = myParam + this.myNumber;
    return `Sum result: ${sum.toString()}`;
  }

  myOtherFunc(): void {
    console.log('Hello!');
  }
}

const myObj = new MyClass(1);

// myObj.myOtherFunc();
// console.log(myObj.myFunc(9));

// COMPOSITION

interface Logger {
  log(param: string): void; 
}

class ConsoleLoggerA implements Logger {
  public log(param:string): void {
    console.log(`${new Date()}: ${param}`);
  }
}

(new ConsoleLoggerA).log('Alou')

class ConsoleLoggerB implements Logger {
  public log(param:string): void {
    const date = new Date();
    console.log(`${date.getDate()}/${date.getMonth()}: ${param}`);
  }
}

(new ConsoleLoggerB).log('Alooou');

interface Database {
  logger: Logger;
  save(key: string, value: string): void;
}

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLoggerA()) {}

  public save(key: string, value: string): void {
    this.logger.log(`Salvando o valor ${value} na chave ${key}`);
  }
}

const loggerA = new ConsoleLoggerA();
const loggerB = new ConsoleLoggerB();

const dbA = new ExampleDatabase(loggerA);
const dbB = new ExampleDatabase(loggerB);
const dbC = new ExampleDatabase();

dbA.save('C1', 'A1');
dbA.save('C2', 'A2');
dbA.save('C3', 'A3');
