var board = [0, 0, 0, 0, 0, 0, 0, 0, 0];


var gameOn = true;
var currentPlayer = 'X';

var takeSquare = (id, player) => {
  if (id && id.length < 2) {
    document.getElementById(id).innerHTML = player;
  }
};

document.addEventListener('click', (event) => {
  if (gameOn) {
    let square = event.path[0].id;
    if (board[square]) {
      console.log('square taken');
    } else {
      board[square] = currentPlayer;
      takeSquare(square, currentPlayer);
      currentPlayer === 'X' ? currentPlayer = 'O' : currentPlayer = 'X';
      console.log(board);
      checkWinner();
    }
  } else if (event.path[0].id === 'clear') {
    gameOn = true;
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    currentPlayer = 'X';
    for (let i = 0; i < 9; i++) {
      document.getElementById(i).innerHTML = '';
    }
    document.getElementById('winner').innerHTML = '';
  }
});

var checkWinner = () => {
  //check rows for winner
  for (let row = 0; row < 3; row++) {
    if (board[0 + (row * 3)] === board[1 + (row * 3)] && board[1 + (row * 3)] === board[2 + (row * 3)] && board[0 + (row * 3)] !== 0) {
      gameOn = false;
      document.getElementById('winner').innerHTML = `Winner! Player ${board[0 + (row * 3)]}`;
      return;
    }
  }
  //check columns for winner
  for (let column = 0; column < 3; column++) {
    if (board[0 + column] === board[3 + column] && board[0 + column] === board[6 + column] && board[0 + column] !== 0) {
      gameOn = false;
      document.getElementById('winner').innerHTML = `Winner! Player ${board[0 + column]}`;
      return;
    }
  }
  //check diagonal for winner
  if (board[0] === board[4] && board[4]) {
    if (board[4] === board[8]) {
      gameOn = false;
      document.getElementById('winner').innerHTML = `Winner! Player ${board[4]}`;
      return;
    }
  } else if (board[2] === board[4] && board[4]) {
    if (board[4] === board[6]) {
      gameOn = false;
      document.getElementById('winner').innerHTML = `Winner! Player ${board[4]}`;
      return;
    }
  }
  //check for tie
  for (let i = 0; i < 9; i++) {
    if (board[i] === 0) {
      checkBoard();
      return;
    }
  }
  gameOn = false;
  document.getElementById('winner').innerHTML = `Tie!`;
  checkBoard();
};

var checkBoard = () => {
  console.log(`\n${board[0]}, ${board[1]}, ${board[2]}\n
  ${board[3]}, ${board[4]}, ${board[5]}\n
  ${board[6]}, ${board[7]}, ${board[8]}\n`);
};



