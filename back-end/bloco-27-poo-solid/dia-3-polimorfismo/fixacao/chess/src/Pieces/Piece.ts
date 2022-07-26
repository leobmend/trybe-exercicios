import Board from "../Board";
import { BoardHouse, isInList } from "../utils-types";

export default abstract class Piece {
  protected _position: BoardHouse;
  abstract type: string;

  constructor(position: BoardHouse, protected board: Board) {
      this._position = position;
  };

  get position() { return this._position; }
  abstract get availableMoves(): BoardHouse[];

  move(newPosition: BoardHouse) {
      console.log(
          `MOVENDO ${this.type} DA CASA ${this._position} PARA A CASA ${newPosition}`
      );
      if (!isInList(newPosition, this.availableMoves)) return false;
      this._position = newPosition;
      return true;
  }
}