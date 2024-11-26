// import {imageUrl} from "../pieces/urlConstant"

// export const playerOneInit = {
//     rook1: {
//         key: "rook1",
//         piece: "rook",
//         imageUrl: imageUrl.rookW,
//         row: 0,
//         column: 0,
//     },
//     knight1: {
//         key: "knight1",
//         piece: "knight",
//         imageUrl: imageUrl.knightW,
//         row: 0,
//         column: 1,
//     },
//     bishop1: {
//         key: "bishop1",
//         piece: "bishop",
//         imageUrl: imageUrl.bishopW,
//         row: 0,
//         column: 2,
//     },
//     queen: {
//         key: "queen",
//         piece: "queen",
//         imageUrl: imageUrl.queenW,
//         row: 0,
//         column: 3,
//     },
//     king: {
//         key: "king",
//         piece: "king",
//         imageUrl: imageUrl.kingW,
//         row: 0,
//         column: 4,
//     },
//     bishop2: {
//         key: "bishop2",
//         piece: "bishop",
//         imageUrl: imageUrl.bishopW,
//         row: 0,
//         column: 5,
//     },
//     knight2: {
//         key: "knight2",
//         piece: "knight",
//         imageUrl: imageUrl.knightW,
//         row: 0,
//         column: 6,
//     },
//     rook2: {
//         key: "rook2",
//         piece: "rook",
//         imageUrl: imageUrl.rookW,
//         row: 0,
//         column: 7,
//     }
// }

// export const getPlayerOneInit = () => {
//     const playerOne = {...playerOneInit};
//     for (let i = 0; i < 8; i++) {
//         playerOne[`pawn${i}`] = {
//             key: `pawn${i}`,
//             piece: "pqwn",
//             imageUrl: imageUrl.pawnW,
//             row: 1,
//             column: i,
//         }
//     }
//     return playerOne;
// }

// export const playerTwoInit = {
//     rook1: {
//         key: "rook1",
//         piece: "rook",
//         imageUrl: imageUrl.rookB,
//         row: 7,
//         column: 0,
//     },
//     knight1: {
//         key: "knight1",
//         piece: "knight",
//         imageUrl: imageUrl.knightB,
//         row: 7,
//         column: 1,
//     },
//     bishop1: {
//         key: "bishop1",
//         piece: "bishop",
//         imageUrl: imageUrl.bishopB,
//         row: 7,
//         column: 2,
//     },
//     queen: {
//         key: "queen",
//         piece: "queen",
//         imageUrl: imageUrl.queenB,
//         row: 7,
//         column: 3,
//     },
//     king: {
//         key: "king",
//         piece: "king",
//         imageUrl: imageUrl.kingB,
//         row: 7,
//         column: 4,
//     },
//     bishop2: {
//         key: "bishop2",
//         piece: "bishop",
//         imageUrl: imageUrl.bishopB,
//         row: 7,
//         column: 5,
//     },
//     knight2: {
//         key: "knight2",
//         piece: "knight",
//         imageUrl: imageUrl.knightB,
//         row: 7,
//         column: 6,
//     },
//     rook2: {
//         key: "rook2",
//         piece: "rook",
//         imageUrl: imageUrl.rookB,
//         row: 7,
//         column: 7,
//     }
// }

// export const getPlayerTwoInit = () => {
//     const playerTwo = {...playerTwoInit};
//     for (let i = 0; i < 8; i++) {
//         playerTwo[`pawn${i}`] = {
//             key: `pawn${i}`,
//             piece: "pqwn",
//             imageUrl: imageUrl.pawnB,
//             row: 6,
//             column: i,
//         }
//     }
//     return playerTwo;
// }

// import {
//     ImageUrlInterface,
//     PieceKeyImageUrlMapInterface,
//     BoardInitInterface,
// } from "./interface";

// const imageUrl: ImageUrlInterface = {
//  Removing the above line because of insufficiend time to encoirporate interfaces
const imageUrl = {
    bishopB: "https://upload.wikimedia.org/wikipedia/commons/8/81/Chess_bdt60.png",
    bishopW: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Chess_blt60.png",
    kingB: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Chess_kdt60.png",
    kingW: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Chess_klt60.png",
    knightB: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Chess_ndt60.png",
    knightW: "https://upload.wikimedia.org/wikipedia/commons/2/28/Chess_nlt60.png",
    pawnB: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Chess_pdt60.png",
    pawnW: "https://upload.wikimedia.org/wikipedia/commons/0/04/Chess_plt60.png",
    queenB: "https://upload.wikimedia.org/wikipedia/commons/a/af/Chess_qdt60.png",
    queenW: "https://upload.wikimedia.org/wikipedia/commons/4/49/Chess_qlt60.png",
    rookB: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Chess_rdt60.png",
    rookW: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Chess_rlt60.png",
}

// export const pieceKeyImageUrlMap: PieceKeyImageUrlMapInterface = {
//  Removing the above line because of insufficiend time to encoirporate interfaces
export const pieceKeyImageUrlMap = {
    rookW1: imageUrl.rookW,
    knightW1: imageUrl.knightW,
    bishopW1: imageUrl.bishopW,
    queenW: imageUrl.queenW,
    kingW: imageUrl.kingW,
    bishopW2: imageUrl.bishopW,
    knightW2: imageUrl.knightW,
    rookW2: imageUrl.rookW,
    pawnW1: imageUrl.pawnW,
    pawnW2: imageUrl.pawnW,
    pawnW3: imageUrl.pawnW,
    pawnW4: imageUrl.pawnW,
    pawnW5: imageUrl.pawnW,
    pawnW6: imageUrl.pawnW,
    pawnW7: imageUrl.pawnW,
    pawnW8: imageUrl.pawnW,
    rookB1: imageUrl.rookB,
    knightB1: imageUrl.knightB,
    bishopB1: imageUrl.bishopB,
    queenB: imageUrl.queenB,
    kingB: imageUrl.kingB,
    bishopB2: imageUrl.bishopB,
    knightB2: imageUrl.knightB,
    rookB2: imageUrl.rookB,
    pawnB1: imageUrl.pawnB,
    pawnB2: imageUrl.pawnB,
    pawnB3: imageUrl.pawnB,
    pawnB4: imageUrl.pawnB,
    pawnB5: imageUrl.pawnB,
    pawnB6: imageUrl.pawnB,
    pawnB7: imageUrl.pawnB,
    pawnB8: imageUrl.pawnB,
}

// export const boardInit: BoardInitInterface = {
//  Removing the above line because of insufficiend time to encoirporate interfaces
export const boardInit = {
    0: {
        key: 0,
        pieceKey: "rookW1",
        player: "w",
        piece: "rook",
    },
    1: {
        key: 1,
        pieceKey: "knightW1",
        player: "w",
        piece: "knight",
    },
    2: {
        key: 2,
        pieceKey: "bishopW1",
        player: "w",
        piece: "bishop",
    },
    3: {
        key: 3,
        pieceKey: "queenW",
        player: "w",
        piece: "queen",
    },
    4: {
        key: 4,
        pieceKey: "kingW",
        player: "w",
        piece: "king",
    },
    5: {
        key: 5,
        pieceKey: "bishopW2",
        player: "w",
        piece: "bishop",
    },
    6: {
        key: 6,
        pieceKey: "knightW2",
        player: "w",
        piece: "knight",
    },
    7: {
        key: 7,
        pieceKey: "rookW2",
        player: "w",
        piece: "rook",
    },
    8: {
        key: 8,
        pieceKey: "pawnW1",
        player: "w",
        piece: "pawn",
    },
    9: {
        key: 9,
        pieceKey: "pawnW2",
        player: "w",
        piece: "pawn",
    },
    10: {
        key: 10,
        pieceKey: "pawnW3",
        player: "w",
        piece: "pawn",
    },
    11: {
        key: 11,
        pieceKey: "pawnW4",
        player: "w",
        piece: "pawn",
    },
    12: {
        key: 12,
        pieceKey: "pawnW5",
        player: "w",
        piece: "pawn",
    },
    13: {
        key: 13,
        pieceKey: "pawnW6",
        player: "w",
        piece: "pawn",
    },
    14: {
        key: 14,
        pieceKey: "pawnW7",
        player: "w",
        piece: "pawn",
    },
    15: {
        key: 15,
        pieceKey: "pawnW8",
        player: "w",
        piece: "pawn",
    },

    56: {
        key: 56,
        pieceKey: "rookB1",
        player: "b",
        piece: "rook",
    },
    57: {
        key: 57,
        pieceKey: "knightB1",
        player: "b",
        piece: "knight",
    },
    58: {
        key: 58,
        pieceKey: "bishopB1",
        player: "b",
        piece: "bishop",
    },
    59: {
        key: 59,
        pieceKey: "queenB",
        player: "b",
        piece: "queen",
    },
    60: {
        key: 60,
        pieceKey: "kingB",
        player: "b",
        piece: "king",
    },
    61: {
        key: 61,
        pieceKey: "bishopB2",
        player: "b",
        piece: "bishop",
    },
    62: {
        key: 62,
        pieceKey: "knightB2",
        player: "b",
        piece: "knight",
    },
    63: {
        key: 63,
        pieceKey: "rookB2",
        player: "b",
        piece: "rook",
    },
    48: {
        key: 48,
        pieceKey: "pawnB1",
        player: "b",
        piece: "pawn",
    },
    49: {
        key: 49,
        pieceKey: "pawnB2",
        player: "b",
        piece: "pawn",
    },
    50: {
        key: 50,
        pieceKey: "pawnB3",
        player: "b",
        piece: "pawn",
    },
    51: {
        key: 51,
        pieceKey: "pawnB4",
        player: "b",
        piece: "pawn",
    },
    52: {
        key: 52,
        pieceKey: "pawnB5",
        player: "b",
        piece: "pawn",
    },
    53: {
        key: 53,
        pieceKey: "pawnB6",
        player: "b",
        piece: "pawn",
    },
    54: {
        key: 54,
        pieceKey: "pawnB7",
        player: "b",
        piece: "pawn",
    },
    55: {
        key: 55,
        pieceKey: "pawnB8",
        player: "b",
        piece: "pawn",
    },
}