define(['constants'],
    function(Constants) {
        
    var Map = Class.create({
        initialize: function() {
            this.map = [
                [Constants.PIECES.BLACK.ROOK, Constants.PIECES.BLACK.KNIGHT, Constants.PIECES.BLACK.BISHOP, Constants.PIECES.BLACK.QUEEN, Constants.PIECES.BLACK.KING, Constants.PIECES.BLACK.BISHOP, Constants.PIECES.BLACK.KNIGHT, Constants.PIECES.BLACK.ROOK],
                [Constants.PIECES.BLACK.PAWN, Constants.PIECES.BLACK.PAWN, Constants.PIECES.BLACK.PAWN, Constants.PIECES.BLACK.PAWN, Constants.PIECES.BLACK.PAWN, Constants.PIECES.BLACK.PAWN, Constants.PIECES.BLACK.PAWN, Constants.PIECES.BLACK.PAWN],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [Constants.PIECES.WHITE.PAWN, Constants.PIECES.WHITE.PAWN, Constants.PIECES.WHITE.PAWN, Constants.PIECES.WHITE.PAWN, Constants.PIECES.WHITE.PAWN, Constants.PIECES.WHITE.PAWN, Constants.PIECES.WHITE.PAWN, Constants.PIECES.WHITE.PAWN],
                [Constants.PIECES.WHITE.ROOK, Constants.PIECES.WHITE.KNIGHT, Constants.PIECES.WHITE.BISHOP, Constants.PIECES.WHITE.QUEEN, Constants.PIECES.WHITE.KING, Constants.PIECES.WHITE.BISHOP, Constants.PIECES.WHITE.KNIGHT, Constants.PIECES.WHITE.ROOK]
            ];
        },

        get: function(coord) {
            if (coord) {
                var piece = this.map[coord.x][coord.y];
                return piece;
            }

            return this.map;
        }
    });

    return Map;
});