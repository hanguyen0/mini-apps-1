
let firstRow = document.getElementById('first').querySelectorAll('td');
let secondRow = document.getElementById('second').querySelectorAll('td');
let thirdRow = document.getElementById('third').querySelectorAll('td');

// //adding X to each cell clicked
// let cells = document.querySelectorAll("td");
//flag to alternating between X and O
// let clicked = false;
// cells.forEach(cell => {
//   cell.addEventListener('click', (event) => {
//     //rules of Tic Tag Toe, make sure cell is empty before placing X or O
//     if (event.target.innerHTML.length === 0) {
//       if (!clicked) {
//         event.target.innerHTML = 'X';
//         clicked = true;
//       } else {
//         event.target.innerHTML = 'O';
//         clicked = false;
//       }
//     }
//   });
// });



let board = [firstRow, secondRow, thirdRow]
let clicked = false;
let announcement = document.querySelector('h2');
let validBoard = [];
let winByRow;
//checking for winner
board.forEach(row => {
  //listen for click event each row
  winByRow = '';
  let player1 = 0;
  let player2 = 0;
  row.forEach(cell => {

    cell.addEventListener('click', (event) => {
      //rules of Tic Tag Toe, make sure cell is empty before placing X or O
      if (event.target.innerHTML.length === 0) {
        if (!clicked) {
          event.target.innerHTML = 'X';
          winByRow += 'X';
          player1++;
          console.log('player1', player1)
          console.log(winByRow)
          clicked = true;
        } else {
          event.target.innerHTML = 'O';
          winByRow += 'O';
          player2++;
          console.log('player2', player2);
          console.log(winByRow)
          clicked = false;
        }
        if (winByRow.length === 3) {
          validBoard.push(winByRow);
          console.log('valid board: ', validBoard);
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



checkBoard = (board) => {

}





//reset game:

let reset = document.querySelector('button');
reset.addEventListener('click', (e) => {
  winByRow = '';
  board.forEach(row => {
    row.forEach(cell => {
      cell.textContent = '';
    })
  });
});
