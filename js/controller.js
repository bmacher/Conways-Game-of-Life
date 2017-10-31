//Main JS Code for Conways Game of Life

function validateInput(value) {
    document.getElementById("errMessage").innerText = "";

    if (isNaN(value)) {
        document.getElementById("errMessage").innerText = "Your value is not a valid number...";
        return false;
    } 
    if (value > 30) {
        document.getElementById("errMessage").innerText = "Chose a number smaller than 30...";
        return false;
    }
    if (value < 1) {
        document.getElementById("errMessage").innerText = "Chose a number bigger than 0...";
        return false;
    }

    return true;
}

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
    
    //Validate input
    if (validateInput(fieldsize) === true) {
        //Set current fieldsize for next generation
        document.getElementById("nextGenHandler").setAttribute("onclick", "createNextGeneration("+fieldsize+")");

        //Start creating field
        field.innerHTML = "";
        var rowElement, cell;
        for (var row=1; row<=fieldsize; row++) {
            rowElement = document.createElement("tr");
            field.appendChild(rowElement);
            //Create cells
            for (var col=1; col<=fieldsize; col++) {
                //Create cell and set attributes
                // <td id="row_column" class="dead" onClick="toggleStateOfCell(this)" onmousdown="showCellCoordinates(row, col) onmouseout="hideCellCoordinates()">
                cell = document.createElement("td");
                cell.setAttribute("id", row+"_"+col);
                cell.setAttribute("class", "dead"); // Cells are dead by default
                cell.setAttribute("onclick", "toggleStateOfCell(this)");
                cell.setAttribute("onmouseover", "showCellCoordinates("+row+","+col+")");
                cell.setAttribute("onmouseout", "hideCellCoordinates()")
                rowElement.appendChild(cell);
            }
        }
    }
}

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

function getNewStateOfCell (row, col, fieldsize) {
    var cell = document.getElementById(row+"_"+col);
    var neighboursAlive = 0;
    var neighbourCell;
    //Check neighbours state and increase neighbourAlive by 1 if neighbour is alive
    for (var neighbourRow=-1; neighbourRow<=1; neighbourRow++) {
        for (var neighbourCol=-1; neighbourCol<=1; neighbourCol++) {
            neighbourCell = document.getElementById(validateCoordinate((row+neighbourRow), fieldsize)+"_"+validateCoordinate(col+neighbourCol, fieldsize));
            if (neighbourCell.getAttribute("class") === "alive") {
                neighboursAlive++;
            }
        }
    }
    //If cell is alive itself, decrease neighboursAlive by 1
    if (cell.getAttribute("class") === "alive") {
        neighboursAlive--;
    }
    //Determine, if cell will live or not
    //1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
    if (cell.getAttribute("class") === "alive" && neighboursAlive < 2) {
        return false;
    }
    //2. Any live cell with two or three live neighbours lives on to the next generation.
    if (cell.getAttribute("class") === "alive" && neighboursAlive >= 2 && neighboursAlive <= 3) {
        return true;
    }
    //3. Any live cell with more than three live neighbours dies, as if by overpopulation.
    if (cell.getAttribute("class") === "alive" && neighboursAlive > 3) {
        return false;
    }
    //4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
    if (cell.getAttribute("class") === "dead" && neighboursAlive === 3) {
        return true;
    }

    return false;
}

function createNextGeneration(fieldsize) {
    var statesOfCells = [];
    //Get current states of all cells
    for (var row=1; row<=fieldsize; row++) {
        statesOfCells[row] = [];
        for (var col=1; col<=fieldsize; col++) {
            if (document.getElementById(row+"_"+col).getAttribute("class") === "alive") {
                statesOfCells[row][col] = true;
            } else {
                statesOfCells[row][col] = false;
            }
        }
    }
    //Set new state of all cells -> temporary stored in statesOfCells
    for (var row=1; row<=fieldsize; row++) {
        for (var col=1; col<=fieldsize; col++) {
            statesOfCells[row][col] = getNewStateOfCell(row, col, fieldsize); 
        }
    }
    //Update states of cell elements
    for (var row=1; row<=fieldsize; row++) {
        for (var col=1; col<=fieldsize; col++) {
            if (statesOfCells[row][col] === true) {
                document.getElementById(row+"_"+col).setAttribute("class", "alive");
            } else {
                document.getElementById(row+"_"+col).setAttribute("class", "dead");
            }
        }
    }
}

document.getElementById("inpFieldsize").value = 10;
createField();