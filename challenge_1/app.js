
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
let winByCol = 0;
//checking for winner
board.forEach(row => {
  let winByRow = 0;

  //listen for click event each row
  row.forEach(cell => {
    cell.addEventListener('click', (event) => {
      //rules of Tic Tag Toe, make sure cell is empty before placing X or O
      if (event.target.innerHTML.length === 0) {
        if (!clicked) {
          event.target.innerHTML = 'X';
          winByRow++;
          winByCol++;
          console.log(winByRow)
          clicked = true;
        } else {
          event.target.innerHTML = 'O';
          winByRow--;
          winByCol++;
          console.log(winByRow)
          clicked = false;
        }
        if (winByRow === 3) {
          console.log('WInner is ...');
        } else {
          console.log('No winner...')
        }
      }
    });

  });



});



checkRow = (row) => {
  
}





//reset game: