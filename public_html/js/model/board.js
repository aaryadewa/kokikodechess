define(['lodash', 'constants', 'model/map', 'model/pawn', 'model/rook', 'model/knight', 'model/bishop', 'model/queen', 'model/king'],
    function(_, Constants, Map, Pawn, Rook, Knight, Bishop, Queen, King) {

    /**
     * Creates chess piece by its coordinates
     * @private
     * @param {int} row Row to put the piece on
     * @param {int} column Column to put the piece on
     * @returns {Piece} Instance of Piece
     */
    var createPiece = function(map, row, column) {
        var type = map.get({ x: row, y: column });
        var config = {
            type: type,
            coord: {
                x: row,
                y: column
            }
        };
        var piece;

        // creates pawn piece
        if (type === Constants.PIECES.WHITE.PAWN || type === Constants.PIECES.BLACK.PAWN) {
            piece = new Pawn(config);
        }

        // creates bishop piece
        else if (type === Constants.PIECES.WHITE.BISHOP || type === Constants.PIECES.BLACK.BISHOP) {
            piece = new Bishop(config);
        }

        // creates knight piece
        else if (type === Constants.PIECES.WHITE.KNIGHT || type === Constants.PIECES.BLACK.KNIGHT) {
            piece = new Knight(config);
        }

        // creates rook piece
        else if (type === Constants.PIECES.WHITE.ROOK || type === Constants.PIECES.BLACK.ROOK) {
            piece = new Rook(config);
        }

        // creates knight queen
        else if (type === Constants.PIECES.WHITE.QUEEN || type === Constants.PIECES.BLACK.QUEEN) {
            piece = new Queen(config);
        }

        // creates knight king
        else if (type === Constants.PIECES.WHITE.KING || type === Constants.PIECES.BLACK.KING) {
            piece = new King(config);
        }

        piece.build();
        return piece.get();
    };

    var Board = Class.create({
        initialize: function(config) {
            // the default settings
            this.config = {
                cellWidth: 90,
                cellHeight: 90
            };

            // merge this.config with passed argument
            _.merge(this.config, config);

            this.map = new Map();
            this.board;
            this.pieces = [];
        },

        build: function() {
            // get board element by its id
            var board = $('board');

            for (var r = 0; r < 8; r++) {
                // creates a new row
                var row = new Element('div', {
                    id: 'row_' +r,
                    class: 'row'
                });

                for (var c = 0; c < 8; c++) {
                    // create a cell
                    var column = new Element('div', {
                        id: 'cell_' +r+ '_' +c,
                        class: 'cell'
                    });

                    // put the piece on the cell on 1st, 2nd, 7th, and 8th row only
                    if (r < 2 || r > 5) {
                        var piece = createPiece(this.map, r, c);
                        this.pieces.push(piece);
                        column.insert(piece);
                    }

                    // appends the cell to the row
                    row.insert(column);
                }

                // appends the row to the board
                board.insert(row);
            }

            // set DnD event listeners to the board
            board.on('dragstart', function(event, element) {
                element.addClassName('dragged');
                event.dataTransfer.effectAllowed = 'move';
                event.dataTransfer.setData('text/plain', element.readAttribute('id'));
            });

            board.on('dragend', function(event, element) {
                element.removeClassName('dragged');
            });

            board.on('dragleave', function(event, element) {
                if (element.hasClassName('cell')) {
                    console.log('leaving block ' +element.readAttribute('id'));
                }
            });

            board.on('dragenter', function(event, element) {
                if (element.hasClassName('cell')) {
                    console.log('entering block ' +element.readAttribute('id'));
                }
            });

            this.board = board;
        }
    });

    return Board;
});