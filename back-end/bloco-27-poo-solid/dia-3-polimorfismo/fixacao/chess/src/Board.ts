import Pawn from "./Pieces/Pawn";
import Piece from "./Pieces/Piece";
import Root from "./Pieces/Root";
import { isInList } from "./utils-types";

export default class Board {
  pieces: Piece[] = [];

  constructor() {
      this.addPiece(new Pawn(['C', '2'], this));
      this.addPiece(new Root(['F', '1'], this));
  }

  private addPiece(piece: Piece) {
      if (isInList(piece.position, this.occupiedHouses))
          return;
      this.pieces.push(piece);
  }
  get occupiedHouses() {
      return this.pieces.map((piece) => piece.position);
  }

}