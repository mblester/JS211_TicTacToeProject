'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// creates and empty "board" for the user to see where marks can be placed.
// using let because the variable is expected to change with more 'X's and 'O's to add
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

// assigns the first mark as 'X'
// using let because the variable is expected to change from 'X' to 'O' and back
let currentMarker = 'X'

// const handleClick = (element) => {

//   // this uses the "log" method on the "console" to log out the element's id so we can see it with our human eyes
//   console.log(`The element you clicked on has an id:  ${element.id}`)

//   // this next line prevents an X being changed to an O or an O being changed to an X by...
//   //  checking to see if the square clicked has anything in it, if not continue
//   if(!document.getElementById(element.id).innerHTML){
//     addMarker(element.id)
//     updateBoard(element.id)
//     checkForWin()

//   }
// }
const addMarker = (row, column) => {

    // @TODO-1: Open the console tab in your Chrome Inspector Tool and click on the top-left square to see what's logged to the console. 
    // console.log(`*** The current marker is:  ${currentMarker}. ***`)
    // console.log(`Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${id}`)
  
   
    // let element = document.getElementById(row, column)
  
  
    //take apart the id
    //change the first character of the id to an integer
    //and save that as the row
    // const row = parseInt(element.row, column.charAt(0))
    // //change the third character of the id, after the dash, to an integer
    // //and save that as column
    // const column = parseInt(element.id.charAt(2))
  
    board[row][column] = currentMarker
  
     //add the marker to the GUI 
     //set the innerHTML property of the element that was clicked to the "currentMarker"
      // element.innerHTML = currentMarker
  
    // //run checkForWin function
      checkForWin()
  }

  // @TODO-1: Open the console tab in your Chrome Inspector Tool and click on the top-left square to see what's logged to the console. 
  //console.log(`*** The current marker is:  ${currentMarker}. ***`)
  //console.log(`Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${id}`)

 
  //let element = document.getElementById(id);


  //take apart the id
  //change the first character of the id to an integer
  //and save that as the row
  //const row = parseInt(element.id.charAt(0))
  //change the third character of the id, after the dash, to an integer
  //and save that as column
  //const column = parseInt(element.id.charAt(2))

//   board[row][column] = currentMarker;

//    //add the marker to the GUI 
//    //set the innerHTML property of the element that was clicked to the "currentMarker"
//    // element.innerHTML = currentMarker

//   // //run checkForWin functio



// }


const resetBoard = () => {

  // @TODO-3: To make your "Restart" button work you'll need to build a line of code here that:
  // collects all of the "td" elements into an HTML Collection: https://www.w3schools.com/jsref/dom_obj_htmlcollection.asp  

  // @TODO-3.5: MIX & MATCH, You will need the following pieces of code to build that line:
  // squares
  // .getElementsByTagName("TD")
  // =
  // document
  // const
  const squares = document.getElementsByTagName("TD");

  // loops over the HTML Collection of TDs and clears out the Xs and Os

  for (i = 0; i < squares.length; i++) {

    // will log out the id of each square as it loops over them.
    console.log(squares[i].id)

    // sets the innerHTML to null to replace the "X" or "O"
    squares[i].innerHTML = null
  }
}

// is a function that print the current status of the board using the variable - board
const printBoard = () => {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

const horizontalWin = () => {
  if((board[0][0] == currentMarker && board[0][1] == currentMarker && board[0][2] == currentMarker) 
    || (board[1][0] == currentMarker && board[1][1] == currentMarker && board[1][2] == currentMarker) 
    || (board[2][0] == currentMarker && board[2][1] == currentMarker && board[2][2] == currentMarker))
    {return true}
  }

const verticalWin = () => {
    if((board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") 
      || (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O")
      || (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") 
      || (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O")
      || (board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") 
      || (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O"))
      {return true}
    }

    const diagonalWin = () => {
      if((board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") 
      || (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O")
      || (board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X") 
      || (board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O"))
      {return true}
    }



const ticTacToe = (row, column) => {
  if (board[row][column].length > 0){
    console.log("here")
    addMarker(row, column)
  }
  // if (checkForWin()){
  //   return true
  // }
}

const getPrompt = () => {
  printBoard();
  console.log("It's Player " + currentMarker + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });
}

const changeMarker = () => {
  if(currentMarker === "X"){
    currentMarker = "O"
  } else {
    currentMarker = "X"
  }
}

const checkForWin = () => {
  if(horizontalWin() || verticalWin() || diagonalWin()) {
   // window.alert(`Player ${currentMarker} won!`)
    return true;
  }else {
    changeMarker()
  }
  }


// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      ticTacToe(0, 0)
      ticTacToe(0, 1)
      ticTacToe(1, 1)
      ticTacToe(0, 2)
      ticTacToe(2, 2)
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
