//Main JS Code for Conways Game of Life

//CLASS: cell
class cell {
    // id = row_col, parent = <tr>
    constructor(id, parent) {
        this.id = id;
        this.cell = document.createElement("td");
        this.cell.setAttribute("id", id);
        this.cell.setAttribute("class", "dead");
        this.cell.setAttribute("onclick", "toggleStateOfCell(this)");
        parent.appendChild(this.cell);
    }
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
        var rowElement = document.createElement("tr");
        field.appendChild(rowElement); 
        //Create cells
        for (col=1; col<=fieldsize; col++) {
            //Create cell and set attributes -> <td id="row_column" class="dead" onClick="ToggleState()">
            // Cells are dead by default
            var cell = document.createElement("td");
            cell.setAttribute("id", row+"_"+col);
            cell.setAttribute("class", "dead");
            cell.setAttribute("onclick", "toogleStateOfCell(this)");
            rowElement.appendChild(cell);
        }
    }

    return true;
}

function toogleStateOfCell (cell) {
    if (cell.getAttribute("class") === "dead") {
        cell.setAttribute("class", "alive");
    } else {
        cell.setAttribute("class", "dead");
    }
}

function createNextGeneration(fieldsize) {
    var cell, cellstate, neighboursAlive, neighbourCellId;
    
    for (row=1; row<=fieldsize; row++) {
        for (col=1; col<=fieldsize; col++) {
            cell = document.getElementById(row+"_"+col);
            cellState = cell.getAttribute("class");
            neighboursAlive = 0;
            //Check neighbours state in clockwise direction
            // Row above
            neighbourCellId = coordinateValidation(row-1, fieldsize)+"_"+coordinateValidation(col-1, fieldsize); //Pattern: row_col
            if (document.getElementById(neighbourCellId).getAttribute("class") === "alive") {neighboursAlive++}
            neighbourCellId = coordinateValidation(row-1, fieldsize)+"_"+coordinateValidation(col, fieldsize); 
            if (document.getElementById(neighbourCellId).getAttribute("class") === "alive") {neighboursAlive++}
            neighbourCellId = coordinateValidation(row-1, fieldsize)+"_"+coordinateValidation(col+1, fieldsize); 
            if (document.getElementById(neighbourCellId).getAttribute("class") === "alive") {neighboursAlive++}
            // Same row
            neighbourCellId = coordinateValidation(row, fieldsize)+"_"+coordinateValidation(col-1, fieldsize); 
            if (document.getElementById(neighbourCellId).getAttribute("class") === "alive") {neighboursAlive++}
            neighbourCellId = coordinateValidation(row, fieldsize)+"_"+coordinateValidation(col+1, fieldsize); 
            if (document.getElementById(neighbourCellId).getAttribute("class") === "alive") {neighboursAlive++}
            // Row below
            neighbourCellId = coordinateValidation(row+1, fieldsize)+"_"+coordinateValidation(col-1, fieldsize); 
            if (document.getElementById(neighbourCellId).getAttribute("class") === "alive") {neighboursAlive++}
            neighbourCellId = coordinateValidation(row+1, fieldsize)+"_"+coordinateValidation(col, fieldsize); 
            if (document.getElementById(neighbourCellId).getAttribute("class") === "alive") {neighboursAlive++}
            neighbourCellId = coordinateValidation(row+1, fieldsize)+"_"+coordinateValidation(col+1, fieldsize); 
            if (document.getElementById(neighbourCellId).getAttribute("class") === "alive") {neighboursAlive++}
            /*
              Rules
                1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
                2. Any live cell with two or three live neighbours lives on to the next generation.
                3. Any live cell with more than three live neighbours dies, as if by overpopulation.
                4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction. */
            if (cellState === "alive" && neighboursAlive < 2) {
                cell.setAttribute("class", "dead");
            }
            if (cellState === "alive" && neighboursAlive > 3) {
                cell.setAttribute("class", "dead");
            }
            if (cellState === "dead" && neighboursAlive === 3) {
                cell.setAttribute("class", "alive");
            }
        }
    }
}    

function coordinateValidation (coordinate, max) {
    //E.g. neighbour of 1_1 on the left is max_1
    if (coordinate > max) {
        return 1;
    }
    if (coordinate < 1) {
        return max;
    }

    return coordinate;
}

createField();

/*
Aktuelles Problem, erst die Status der Zellen der nächsten Generation bestimmen, bevor sie auch wirklich gesetzt werden.
*/