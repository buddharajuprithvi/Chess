export interface ImageUrlInterface {
    bishopB: string;
    bishopW: string;
    kingB: string;
    kingW: string;
    knightB: string;
    knightW: string;
    pawnB: string;
    pawnW: string;
    queenB: string;
    queenW: string;
    rookB: string;
    rookW: string;
}

export interface PieceKeyImageUrlMapInterface {
    [key: string]: string;
}

export interface BoardSquareInterface {
    key: number,
    pieceKey: string,
    player: "w" | "b",
    piece: "rook" | "knight" | "bishop" | "queen" | "king" | "pawn",
}

export interface BoardInitInterface {
    [square: number]: BoardSquareInterface; // Mapping of square indices (0-63) to board squares
}