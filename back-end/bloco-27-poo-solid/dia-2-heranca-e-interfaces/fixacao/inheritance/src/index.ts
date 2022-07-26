class Superclass {
  isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  public sayHello() {
    console.log("Hello world 1");
  }

  private sayHello2() {
    console.log("Hello world 2")
  }

  protected sayHello3() {
    console.log("Hello world 3")
  }
}

class Subclass extends Superclass {
  constructor() {
    super();

    this.isSuper = false;
  }

  public sayHelloSub() {
    // this.sayHello2(); Não é permitido, pois é privado à Superclass
    this.sayHello3();
  }

}

function myFunc(obj: Superclass) {
  obj.sayHello();
  console.log(obj.isSuper)
}

const superclass = new Superclass();
const subclass = new Subclass();

myFunc(superclass);
myFunc(subclass);

function myOtherFunc(obj: Subclass) {
  obj.sayHelloSub();
}

// superclass.sayHello2(); Sem acesso!
// superclass.sayHello3(); Sem acesso!
myOtherFunc(subclass);
