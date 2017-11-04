//JS Code for Conways Game of Life using jQuery

$(function(){
    "use strict";
    
    //Input should be a number between 1 and 30 -> true || false
    function validateInput( value ) {
        $( "#lbErrMsg" ).html( "" );

        if ( isNaN( value ) ) {
            $( "#lbErrMsg" ).html( "Your input is not a number..." );
            return false;
        }
        if ( value < 0 || value > 30 ) {
            $( "#lbErrMsg" ).html( "Your input has to be between 1 and 30..." );
            return false;
        }

        return true;
    }

    //Toggle the state of cell
    function toggleStateOfCell(cell) {
        //Check, if game ist running
        //if (! document.getElementById("startGame").disabled) {
        if ( cell.attr( "class" ) === "dead" ) {
            cell.attr( "class", "alive" );
        } else {
            cell.attr( "class", "dead" );
        }
        //}
    }

    //Create field with given field size
    $( "#btnCrtField" ).click(function(){
        var fieldSize = Number( $( "#inpFieldSize" ).val() );
        var field = $( "#tblField" );

        //Validate input
        if ( validateInput( fieldSize ) ) {
            //Set current field size for next generation and start game
            // btnStrtGame
            // btnNextGen
        
            //Start creating field
            field.empty();
            var tableRow, cell;
            
            for ( var row = 1; row <= fieldSize; row++ ) {           
                //Create and append row
                tableRow = $( "<tr></tr>" );
                field.append( tableRow );
                for ( var col = 1; col <= fieldSize; col++ ) {
                    //Create and append cell
                    cell = $( "<td></td>" );
                    
                    //Add id and class to cell
                    // <td id="row_col" class="dead"></td>
                    cell.attr({
                        "id": row + "_" + col,
                        "class": "dead"
                    });

                    tableRow.append( cell );
                }
            }

            //Add event handlers to all cells
            $( ".content table tr td" ).on({
                click: function(){
                    toggleStateOfCell( $( this ) );
                },
                mouseenter: function(){
                    $( "#pCellCoordinates" ).text( "Coordinates " + $( this ).attr( "id" ) );
                },
                mouseleave: function(){
                    $( "#pCellCoordinates" ).text( "" );
                }
            });
        }
    });

    //------------------------------------------------
    //Delete the following parameters in final version
    $( "#inpFieldSize" ).val(12);
    $( "#btnCrtField" ).trigger( "click" );
 });