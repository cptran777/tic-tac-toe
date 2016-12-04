import React from 'react';

const RowElement = (props) => {
  
  let fill = ' ';

  if (props.data === 1) {
    fill = 'X';
  } else if (props.data === 2) {
    fill = 'O';
  }

  const makePlay = () => {
    console.log('making a play');
    if (props.data === 0) {
      props.setBoard(props.row, props.col);
    }
  }

  return (
    <div className={props.col === 1 ? "col-md-4 board-el mid-col" : "col-md-4 board-el"} key={Math.random() * 30000} onClick={makePlay}>
      <p>{fill}</p>
    </div>
  );
};

const Row = (props) => {
  return (
    <div className={props.row === 1 ? "row board-row mid-row" : "row board-row"}>
      {props.data.map((element, idx) => {
        return <RowElement data={element} setBoard={props.setBoard} row={props.row} col={idx} key={Math.random() * 30000}/>
      })}
    </div>
  );
};

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      board: [[0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]],
      turn: 1
    }
  }

  setBoard(x, y) {
    let board = this.state.board;
    board[x][y] = this.state.turn;
    this.state.turn = this.state.turn === 1 ? 2 : 1;
    this.setState({board: board});
  }

  render() {
    return (
      <div className="container-fluid board-container">
        {this.state.board.map((row, idx) => {
          return <Row data={row} row={idx} setBoard={this.setBoard.bind(this)} key={Math.random() * 30000}/>
        })}
      </div>
    );
  }
}

export default Board;