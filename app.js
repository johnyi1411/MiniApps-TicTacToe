var board = [0, 0, 0, 0, 0, 0, 0, 0, 0];


var gameOn = true;
var currentPlayer = 'X';

var takeSquare = (id, player) => {
  if (id) {
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
  }
});

var checkWinner = () => {
  for (let row = 0; row < 3; row++) {
    if (board[0 + (row * 3)] === board[1 + (row * 3)] && board[1 + (row * 3)] === board[2 + (row * 3)] && board[0 + (row * 3)] !== 0) {
      gameOn = false;
      document.getElementsByClassName('winner').innerHTML = `Winner! Player ${board[0 + (row * 3)]}`;
      console.log(`Winner! Player ${board[0 + row]}`);
    }
  }
  for (let column = 0; column < 3; column++) {
    if (board[0 + column] === board[3 + column] && board[0 + column] === board[6 + column] && board[0 + column] !== 0) {
      gameOn = false;
      document.getElementsByClassName('winner').innerHTML = `Winner! Player ${board[0 + column]}`;
      console.log(`Winner! Player ${board[0 + column]}`);
    }
  }
  console.log(`\n${board[0]}, ${board[1]}, ${board[2]}\n
  ${board[3]}, ${board[4]}, ${board[5]}\n
  ${board[6]}, ${board[7]}, ${board[8]}\n`);
};

