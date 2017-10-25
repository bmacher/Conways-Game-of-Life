// Main JS Code for Convays Game of Life

// CLASS CELL
function cell(parent, id) {
    // PROPERTIES
    this.id = id
    this.state = false;  
    // create HTML element and set id
    this.element = document.createElement("td");
    this.element.setAttribute("id", id);    
    // append element to parent -> <tr>
    parent.appendChild(this.element);

    // FUNTIONS
    // change current state of cell (true|false)
    this.changeState = function (state) {
        this.state = state;
    };
}

// FUNCTIONS
// creating new field via button click -> true|false
function buttonClick() {
    // get HTML elements
    var size = document.getElementById("inpSize").value;
    var field = document.getElementById("field");

    // check, if size is a number and < 30, otherwise abort
    if (! (size = Number(size))) {
        alert("Your value is not a valid number...");
        return false;
    } else if (size > 30) {
        alert("Chose a number smaller than 30...");
        return false;
    }

    // clear field
    field.innerHTML = "";

    // create field -> elements are stored in array
    /*   ###################
        #    0   1   2   3  #
        # 1  tr  td  td  td #
        # 2  tr  td  td  td #
        # 3  tr  td  td  td # 
         ###################  */
    cells = [];
    
    // create rows and columns
    for (row = 1; row <= size; row++) {
        // create row
        cells[row] = [];
        cells[row].push(document.createElement("tr"));
        // append row to parrent -> <table>
        field.appendChild(cells[row][0]);

        // create columns 
        for (column = 1; column <= size; column++) {
            // create cell and append to cells[row][column]
            cells[row].push(new cell(cells[row][0], row +"_"+ column))
        }
    }

    return true;
}