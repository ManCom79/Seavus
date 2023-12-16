// Write a Javascript function that will dynamiclly create a table
// User should input the number of Colums and Rows
// In every table cell print which row and column it is (ex. Row-3 Column-1)

let htmlTbody = document.getElementById("tbody");
let userInputColumns;
let userInputRows;

document.addEventListener("DOMContentLoaded", function () {
  do {
    userInputColumns = prompt("How many columns do you want the table to have?\n(please enter positive integers only)");
    userInputColumns = Number(userInputColumns)
  } while (isNaN(userInputColumns) !== false || userInputColumns <= 0);

  do {
    userInputRows = prompt("How many rows do you want the table to have?\n(please enter positive integers only)");
    userInputRows = Number(userInputRows)
  } while (isNaN(userInputRows) !== false || userInputRows <= 0);

  for (i = 0; i < userInputRows; i++) {
    tr = document.createElement("tr");
    htmlTbody.appendChild(tr);
    for (j = 0; j < userInputColumns; j++) {
      td = document.createElement("td");
      tr.appendChild(td);
      td.innerText = `row: ${i + 1} column:${j + 1}`;
    }
  }
});
