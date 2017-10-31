//Main JS Code for Conways Game of Life

function toggleStateOfCell(cell) {
    if (cell.getAttribute("class") == "dead") {
        cell.setAttribute("class", "alive");
    } else {
        cell.setAttribute("class", "dead");
    }
}

function showCellCoordinates(row, col) {
    document.getElementById("cellCoordinates").innerText = "Coordinates "+row+":"+col;
}

function hideCellCoordinates() {
    document.getElementById("cellCoordinates").innerText = "";
}

function createField() {
    var fieldsize = Number(document.getElementById("inpFieldsize").value);
    var field = document.getElementById("field");
    
    //Input validation -> number between 0 and 31
    document.getElementById("errMessage").innerText = "";
    if (isNaN(fieldsize)) {
        document.getElementById("errMessage").innerText = "Your value is not a valid number...";
        return false;
    } 
    if (fieldsize > 30) {
        document.getElementById("errMessage").innerText = "Chose a number smaller than 30...";
        return false;
    }
    if (fieldsize < 1) {
        document.getElementById("errMessage").innerText = "Chose a number bigger than 0...";
        return false;
    }

    //Set current fieldsize for next generation
    document.getElementById("nextGenHandler").setAttribute("onclick", "createNextGeneration("+fieldsize+")");

    //Field creation
    field.innerHTML = ""; 
    for (row=1; row<=fieldsize; row++) {
        rowElem = document.createElement("tr");
        field.appendChild(rowElem);
        //Create cells
        for (col=1; col<=fieldsize; col++) {
            //Create cell and set attributes -> <td id="row_column" class="dead" onClick="toggleStateOfCell(this)">
            // Cells are dead by default
            cell = document.createElement("td");
            cell.setAttribute("id", row+"_"+col);
            cell.setAttribute("class", "dead");
            cell.setAttribute("onclick", "toggleStateOfCell(this)");
            cell.setAttribute("onmouseover", "showCellCoordinates("+row+","+col+")");
            cell.setAttribute("onmouseout", "hideCellCoordinates()")
            rowElem.appendChild(cell);
        }
    }

    return true;
}

function createNextGeneration(fieldsize) {
    var statesOfCells = [];
    var cell, neighbourCell, neighboursAlive;
    //Get current states of all cells
    for (row=1; row<=fieldsize; row++) {
        statesOfCells[row] = [];
        for (col=1; col<=fieldsize; col++) {
            if (document.getElementById(row+"_"+col).getAttribute("class") === "alive") {
                statesOfCells[row][col] = true;
            } else {
                statesOfCells[row][col] = false;
            }
        }
    }
    
    //Set new state of all cells -> temporary in array
    for (row=1; row<=fieldsize; row++) {
        for (col=1; col<=fieldsize; col++) {
            neighboursAlive = 0;
            //Check neighbours state in clockwise direction and increase neighbourAlive by 1
            // Row above
            neighbourCell = document.getElementById(validateCoordinate(row-1, fieldsize)+"_"+validateCoordinate(col-1, fieldsize));
            if (neighbourCell.getAttribute("class") === "alive") { neighboursAlive++; }
            neighbourCell = document.getElementById(validateCoordinate(row-1, fieldsize)+"_"+validateCoordinate(col, fieldsize));
            if (neighbourCell.getAttribute("class") === "alive") { neighboursAlive++; }
            neighbourCell = document.getElementById(validateCoordinate(row-1, fieldsize)+"_"+validateCoordinate(col+1, fieldsize));
            if (neighbourCell.getAttribute("class") === "alive") { neighboursAlive++; }
            // Same row
            neighbourCell = document.getElementById(validateCoordinate(row, fieldsize)+"_"+validateCoordinate(col-1, fieldsize));
            if (neighbourCell.getAttribute("class") === "alive") { neighboursAlive++; }
            neighbourCell = document.getElementById(validateCoordinate(row, fieldsize)+"_"+validateCoordinate(col+1, fieldsize));
            if (neighbourCell.getAttribute("class") === "alive") { neighboursAlive++; }
            // Row below
            neighbourCell = document.getElementById(validateCoordinate(row+1, fieldsize)+"_"+validateCoordinate(col-1, fieldsize));
            if (neighbourCell.getAttribute("class") === "alive") { neighboursAlive++; }
            neighbourCell = document.getElementById(validateCoordinate(row+1, fieldsize)+"_"+validateCoordinate(col, fieldsize));
            if (neighbourCell.getAttribute("class") === "alive") { neighboursAlive++; }
            neighbourCell = document.getElementById(validateCoordinate(row+1, fieldsize)+"_"+validateCoordinate(col+1, fieldsize));
            if (neighbourCell.getAttribute("class") === "alive") { neighboursAlive++; }

            /*
              Rules
                1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
                2. Any live cell with two or three live neighbours lives on to the next generation.
                3. Any live cell with more than three live neighbours dies, as if by overpopulation.
                4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
            */

            cell = document.getElementById(row+"_"+col);
            if (cell.getAttribute("class") === "alive" && neighboursAlive < 2) {
                statesOfCells[row][col] = false;
            }
            if (cell.getAttribute("class") === "alive" && neighboursAlive > 3) {
                statesOfCells[row][col] = false;
            }
            if (cell.getAttribute("class") === "dead" && neighboursAlive === 3) {
                statesOfCells[row][col] = true;
            }
        } //cols
    } //rows

    //Update states of cell elements
    for (row=1; row<=fieldsize; row++) {
        for (col=1; col<=fieldsize; col++) {
            if (statesOfCells[row][col] === true) {
                document.getElementById(row+"_"+col).setAttribute("class", "alive");
            } else {
                document.getElementById(row+"_"+col).setAttribute("class", "dead");
            }
        }
    }
}

//Get coordinates and max, return id of the neighbour
function validateCoordinate(coor, max) {
    /*
      Correct neighbour coordinates
        max_max max_1 max_2 
        1_max   1_1   1_2     
        2_max   2_1   2_2
    */
    if (coor < 1) {
        return max;
    }
    if (coor > max) {
        return 1;
    }
    return coor;
}