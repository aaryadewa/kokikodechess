define(['lodash', 'model/piece'],
    function(_, Piece) {

    var Pawn = Class.create(Piece, {
        build: function($super) {
            this.defaults.name = 'pawn';
            $super();
        }
    });

    return Pawn;
});