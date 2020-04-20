
let firstRow = document.getElementById('first').querySelectorAll('td');
let secondRow = document.getElementById('second').querySelectorAll('td');
let thirdRow = document.getElementById('third').querySelectorAll('td');
let board = [firstRow, secondRow, thirdRow]
let clicked = false;
let announcement = document.querySelector('h2');
let validBoard = [];
let firstPlay = 'X';



// if (winByRow.length === 3) {
//   validBoard.push(winByRow);
//   console.log('valid board: ', validBoard);
// }



//check board for winner
// checkBoard = (row) => {
//   row.childNodes.forEach(cell => {
//     console.log(cell.textContent);
//   })
// }


board.forEach(row => {
  let winByRow = '';
  let player1 = 0;
  let player2 = 0;
  //reset game:
  let reset = document.querySelector('button');
  reset.addEventListener('click', (e) => {
    winByRow = '';
    clicked = false;
    player1 = 0;
    player2 = 0;
    announcement.textContent = '';
    board.forEach(row => {
      row.forEach(cell => {
        cell.textContent = '';
      })
    });
  });
  if (winByRow.length === 3) {
    validBoard.push(winByRow);
  }


  row.forEach((cell, idx )=> {
    cell.addEventListener('click', (event) => {
      let target = event.target;
      //rules of Tic Tag Toe, make sure cell is empty before placing X or O
      if (target.textContent === "") {
        if (!clicked) {
          target.textContent = 'X';
          winByRow += 'X';
          player1++;
          // console.log('player1', player1)
          console.log(winByRow)
          clicked = true;
        } else {
          target.textContent = 'O';
          winByRow += 'O';
          player2++;
          // console.log('player2', player2);
          console.log(winByRow)
          clicked = false;
        }
        if (player1 === 3) {
          announcement.textContent = 'WInner is X';
        } else if (player2 === 3) {
          announcement.textContent = 'Winner is O';
        }
      }
    });
  });
});

