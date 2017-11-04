// JS Code for Conways Game of Life using jQuery

$(function(){
    "use strict";

    // VARIABLES -----------
    var fieldSize;
    
    // GET HTML ELEMENTS ---
    var field = $( "#tblField" );
    var inpFieldSize = $( "#inpFieldSize" );
    var btnCrtField  = $( "#btnCrtField" );
    var btnStrtGame  = $( "#btnStrtGame" );
    var btnNextGen   = $( "#btnNextGen" );
    var btnStpGame   = $( "#btnStpGame" );
    
    // HELPERS -------------

    function validateInput( value ) {
        $( "#lbErrMsg" ).html( "" );
        
        // check, if input is a number between 1 and 30 -> true || false
        if ( isNaN( value ) ) {
            $( "#lbErrMsg" ).html( "Your input is not a number..." );
            return false;
        }
        if ( value < 1 || value > 30 ) {
            $( "#lbErrMsg" ).html( "Your input has to be between 1 and 30..." );
            return false;
        }

        return true;
    }

    function toggleStateOfCell( cell ) {
        // Check, if game ist running
        if (! $( "#btnStrtGame" ).prop( "disabled" ) ) {
            cell.toggleClass( "alive" );
            cell.toggleClass( "dead" );
        }
    }

    function validateCoordinate( coor, max ) {
        // Correct neighbour coordinates for 1_1
        //   max_max max_1 max_2 
        //   1_max   1_1   1_2     
        //   2_max   2_1   2_2
        // 0 -> max & (max + 1) -> 1
        if ( coor < 1 ) {
            return max;
        }
        if ( coor > max)  {
            return 1;
        }

        return coor;
    }
    
    // CORE FUNCTIONS -------

    function createField() {
        if ( validateInput( fieldSize ) === true ) {
            // show control buttons
            $( "#divControl" ).show();
        
            //clear field
            field.empty();
            
            // start creating field
            var tr, cell;
            for ( var row = 1; row <= fieldSize; row++ ) {           
                // create and append row
                tr = $( "<tr></tr>" );
                field.append( tr );
                for ( var col = 1; col <= fieldSize; col++ ) {
                    // create and append cell
                    cell = $( "<td></td>" );
                    
                    // add id and class to cell
                    //  cell = <td id="row_col" class="dead"></td>
                    cell.attr({
                        "id": row + "_" + col,
                        "class": "dead"
                    });

                    tr.append( cell );
                }
            }

            // add event handlers to all cells
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
    }

    // EVENT HANDLERS -------

    // click on "Create field NxN"
    btnCrtField.click(function(){
        fieldSize = Number( inpFieldSize.val() );
        createField();
    });

    //  ------------------------------------------------
    //  delete the following parameters in final version
    //$( "#inpFieldSize" ).val(10);
    //$( "#btnCrtField" ).trigger( "click" );
 });