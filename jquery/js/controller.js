// JS Code for Conways Game of Life using jQuery

$(function(){
    "use strict";

    // VARIABLES -----------
    var fieldSize;
    var timer; // for "Start" button
    
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
            $( "#tblField" ).empty();
            
            // start creating field
            var tr, cell;
            
            for ( var row = 1; row <= fieldSize; row++ ) {           
                // create and append row
                tr = $( "<tr></tr>" );
                $( "#tblField" ).append( tr );
                
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

    function getNewStateOfCell( cell, currentStateOfCells /* Array */, row, col ) {
        var livingNeighbours = 0;
        var neighbourCell;

        // check neighbours states and increase livingNeighbours by 1 if a neighbour is living ( alive = true )
        for ( var nbRow = -1; nbRow <= 1; nbRow++ ) {
            for ( var nbCol = -1; nbCol <= 1; nbCol++ ) {
                if ( currentStateOfCells[ validateCoordinate( row + nbRow, fieldSize ) ]
                                        [ validateCoordinate( col + nbCol, fieldSize ) ] ) {
                    livingNeighbours++;
                }
            } 
        } 

        // if cell is alive itself, decrease livingNeighbours by 1
        if ( cell.attr( "class" ) === "alive" ) {
            livingNeighbours--;
        }
        
        // determine, if cell will live or not
        // 1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
        if ( cell.attr( "class" ) === "alive" && livingNeighbours < 2 ) {
            return "dead";
        }
        //2. Any live cell with two or three live neighbours lives on to the next generation.
        if ( cell.attr( "class" )  === "alive" && livingNeighbours >= 2 && livingNeighbours <= 3 ) {
            return "alive";
        }
        //3. Any live cell with more than three live neighbours dies, as if by overpopulation.
        if ( cell.attr( "class" ) === "alive" && livingNeighbours > 3 ) {
            return "dead";
        }
        //4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
        if ( cell.attr( "class" ) === "dead" && livingNeighbours === 3 ) {
            return "alive";
        }

        return "dead";
        }

    function createNextGeneration(){
        var cells = [];
        var currentStateOfCells = [];
        var row, col, id, newState;

        // get cells and current state of all cells
        for ( row = 1; row <= fieldSize; row++ ) {
            cells[ row ] = [];
            currentStateOfCells[ row ] = [];

            for ( col = 1; col <= fieldSize; col++ ) {
                // id = #row_col
                id = "#" + row + "_" + col;
                cells[ row ][ col ] = $( id );
                
                // store states temporarily to set states of next generation
                //  based on current states ( alive = true & dead = false )
                if ( cells[ row ][ col ].attr( "class" ) === "alive" ) {
                    currentStateOfCells[ row ][ col ] = true;
                } else {
                    currentStateOfCells[ row ][ col ] = false;
                }
            }
        }

        // update states
        for ( row = 1; row <= fieldSize; row++ ) {
            for ( col = 1; col <= fieldSize; col++ ) {
                newState = getNewStateOfCell( cells[ row ][ col ], currentStateOfCells, row, col );
                cells[ row ][ col ].attr( "class", newState );
            }
        }
    }

    // EVENT HANDLERS -------

    // click on "Create field NxN"
    $( "#btnCrtField" ).click( function click_btnCrtField(){
        // set fieldSize only if input ist a number
        if ( validateInput( Number( $( "#inpFieldSize" ).val() ) ) ) {
            fieldSize = Number( $( "#inpFieldSize" ).val() );
            createField();
        }
    });

    // click on "Next generation"
    $( "#btnNextGen" ).click( function click_btnNextGen(){
        createNextGeneration();
    });

    // click on "Start"
    $( "#btnStrtGame" ).click( function click_btnStrtGame(){
        timer = setInterval( function setTimer(){ createNextGeneration(); }, 500 );

        // disable "Start" and "Next generation" button
        $( "#btnStrtGame" ).prop( "disabled", true );
        $( "#btnNextGen" ).prop( "disabled", true );
    });

    // click on "Stop"
    $( "#btnStpGame" ).click( function click_btnStpGame(){
        clearInterval( timer );

        // enable "Start" and "Next generation" button
        $( "#btnStrtGame" ).prop( "disabled", false );
        $( "#btnNextGen" ).prop( "disabled", false );
    });

    //  ------------------------------------------------
    // for debugging purposes
    //$( "#inpFieldSize" ).val(16);
    //$( "#btnCrtField" ).trigger( "click" );
 });