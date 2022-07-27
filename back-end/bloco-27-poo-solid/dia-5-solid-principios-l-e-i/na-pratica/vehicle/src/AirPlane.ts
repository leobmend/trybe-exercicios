import { IAirPlane, ICar } from "./interfaces";

export default class AirPlane implements IAirPlane {
  fly(): void {
    console.log("Airplane is flying.");
  }
}