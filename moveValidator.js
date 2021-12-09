const reader = require('readline-sync');

let possibleColumns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let possibleRows = ['1', '2', '3', '4', '5', '6', '7', '8'];

let figure = reader.question("Choose one of the figures (rook, bishop, queen, knight): ");
let initialPosition = reader.question("What is the initial position?");
let moveToPosition = reader.question("What position do you want to move to?");

let initialColumn = initialPosition.charAt(0);
let initialRow = initialPosition.charAt(1);
let moveToColumn = moveToPosition.charAt(0);
let moveToRow = moveToPosition.charAt(1);

function turnIntoNumber (column) {
    for (let i = 0; i <= possibleColumns.length - 1; i++) {
        if (possibleColumns[i] === column) {
            column = i + 1;
        }
    }
    return column;
}


function rook (initialRow, initialColumn, moveToRow, moveToColumn) {
    if (initialRow === moveToRow || initialColumn === moveToColumn) {
        return true;
    }
    return false;
}



function knight (initialColumn, initialRow, moveToColumn, moveToRow) {
    if ((turnIntoNumber(moveToColumn) === turnIntoNumber(initialColumn) + 2 || turnIntoNumber(moveToColumn) === turnIntoNumber(initialColumn) - 2) && (Number(moveToRow) === Number(initialRow) + 1 || Number(moveToRow) === Number(initialRow) - 1)) {
        return true;
    } else if ((Number(moveToRow) === Number(initialRow) + 2 || Number(moveToRow) === Number(initialRow) - 2) && (turnIntoNumber(moveToColumn) === turnIntoNumber(initialColumn) + 1 || turnIntoNumber(moveToColumn) === turnIntoNumber(initialColumn) - 1)) {
        return true;
    }
    return false;
}



function bishop (initialColumn, initialRow, moveToColumn, moveToRow) {
    if (Math.abs(Number(initialRow) - Number(moveToRow)) === Math.abs(turnIntoNumber(initialColumn) - turnIntoNumber(moveToColumn))) {
        return true;
    }
    return false;
}



function queen (initialColumn, initialRow, moveToColumn, moveToRow) {
    if ((Math.abs(Number(initialRow) - Number(moveToRow)) === Math.abs(turnIntoNumber(initialColumn) - turnIntoNumber(moveToColumn))) || (initialRow === moveToRow || initialColumn === moveToColumn)) {
        return true
    }
    return false;
}



if (figure === "rook") {
    if (rook(initialColumn, initialRow, moveToColumn, moveToRow)) {
        console.log("The move is valid.");
    } else {
        console.log("The move is not valid.");
    }
}
    

if (figure === "knight") { 
    if (knight(initialColumn, initialRow, moveToColumn, moveToRow)) {
        console.log("The move is valid.");
    } else {
        console.log("The move is not valid.");
    }
}

if (figure === "bishop") {
    if (bishop(initialColumn, initialRow, moveToColumn, moveToRow)) {
        console.log("The move is valid.");
    } else {
        console.log("The move is not valid.");
    }
}    

if (figure === "queen") {
    if (queen(initialColumn, initialRow, moveToColumn, moveToRow)) {
        console.log("The move is valid.");
    } else {
        console.log("The move is not valid.");
    }
}