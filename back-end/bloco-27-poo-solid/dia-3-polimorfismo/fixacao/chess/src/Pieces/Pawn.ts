import { BoardHouse, boardRows, isInList } from "../utils-types";
import Piece from "./Piece";

export default class Pawn extends Piece {
  type = 'Peão';
  get availableMoves() {
      const column = this.position[0];
      const row = this.position[1];
      const rowIndex = boardRows.indexOf(row);
      if (rowIndex === 7)
          return [];

      const nextHouse: BoardHouse = [column, boardRows[rowIndex + 1]];
      if (isInList(nextHouse, this.board.occupiedHouses))
          return [];

      return [nextHouse];
  }
}