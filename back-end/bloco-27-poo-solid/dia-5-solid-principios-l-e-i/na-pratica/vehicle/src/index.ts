import AirPlane from "./AirPlane";
import Car from "./Car";
import FuturisticCar from "./FuturisticCar";

function main(): void {
  const car = new Car();
  const airPlane = new AirPlane();
  const futuristicCar = new FuturisticCar();

  car.drive();
  airPlane.fly();
  futuristicCar.drive();
  futuristicCar.fly();
}

main();