// Main JS Code for Conways Game of Life

// create new field via button click -> true|false
function bClickCreateField() {
    // get size of field
    var size = Number(document.getElementById("inpSize").value);
    // get field element -> <table>
    var field = document.getElementById("field");

    // input validation -> number between 0 and 31
    document.getElementById("errMessage").innerText = "";
    if (isNaN(size)) {
        document.getElementById("errMessage").innerText = "Your value is not a valid number...";
        return false;
    } 
    if (size > 30) {
        document.getElementById("errMessage").innerText = "Chose a number smaller than 30...";
        return false;
    }
    if (size < 1) {
        document.getElementById("errMessage").innerText = "Chose a number bigger than 0...";
        return false;
    }

    // clear field
    field.innerHTML = "";

    // create field with cells
    /*   ###################
        #    0   1   2   3  #
        # 1  tr  td  td  td #
        # 2  tr  td  td  td #
        # 3  tr  td  td  td # 
         ###################  */
    
    for (row = 1; row <= size; row++) {
        // create row element -> <tr>
        var rowElement = document.createElement("tr");
        // append row to parrent -> <table>
        field.appendChild(rowElement); 

        // create cells
        for (col = 1; col <= size; col++) {
            // create cell and set attributes -> <td id="row_column" class="dead" onClick="ToggleState()">
            var cell = document.createElement("td");
            cell.setAttribute("id", row+"_"+col);
            cell.setAttribute("class", "dead");
            cell.setAttribute("onclick", "toogleState(this)");
            // append cell to parrent -> <tr>
            rowElement.appendChild(cell);
        }
    }

    return true;
}

// toogle state of selected cell
function toogleState (cell) {
    if (cell.getAttribute("class") === "dead") {
        cell.setAttribute("class", "alive");
    } else {
        cell.setAttribute("class", "dead");
    }
}

bClickCreateField();