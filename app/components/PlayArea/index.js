import React from 'react';
import {boardInit, pieceKeyImageUrlMap} from "./constants";
import {
  Square,
  RowContainer,
  SlotContainer,
  ErrorMessage,
} from "./PlayAreaStyled";




export default function PlayArea() {
  const [currentGame, setCurrentGame] = React.useState(boardInit);
  const [turn, setTurn] = React.useState('w')
  const [errorMessage, setErrorMessage] = React.useState("")
  const [from, setFrom] = React.useState(null)


  const validateMove = (from, to) => {
    console.log(from, to, currentGame[from])
    if (currentGame[from].piece == "pawn") {
      //  Allow for only moving 1 step forward
      //  2 steps in case if the from row is the front row of the initial setup
      //  diagnol in case of taking out another piece
    }

    //  Need to add validations for all the moves here before we execute the move
  }

  const slotClicked = (slotKey) => {

    if (!from) {
      if (!!currentGame[slotKey] && currentGame[slotKey].player === turn) {
        setErrorMessage("")
        setFrom(slotKey)
      } else {
        //  cases where we are selecting the wrong player or an empty slot
        setErrorMessage("Invalid Selection")
      }
    } else {
      if (slotKey == from) {
        //  cases where the from and the to are the same. so we are restricting the move
        setErrorMessage("Select the destination")
      } else {
        //  validate the move
        validateMove(from, slotKey)
        //  reset the variables
      }
    }
  }

  const generateSlot = (squareIndex) => {
    if (!!currentGame[squareIndex]) {
      return (
        <SlotContainer>
          <img src={pieceKeyImageUrlMap[currentGame[squareIndex].pieceKey]} key={squareIndex} />
        </SlotContainer>
      )
    }
    return ""
  }

  const rowsRender = () => {
    let rowsRender = [];
    for (let row = 0; row < 8; row++) {
      let columnsRender = []
      for (let column = 0; column < 8; column++) {
        const index = row*8+column;
        columnsRender.push(
        <Square
          key={`square-${row}-${column}`}
          isDark={(row+column) % 2 == 0 ? true : false}
          onClick={() => slotClicked(index)}
          >
          {generateSlot(index)}
        </Square>
        )
      }
      rowsRender.push(
        <RowContainer key={`row-${row}`}>
          {columnsRender}
        </RowContainer>
      )
    }
    return rowsRender;
  }

  return (
    <div>
      <div>
        {rowsRender()}
      </div>
      <ErrorMessage>
        {errorMessage}
      </ErrorMessage>
    </div>
  );
}
