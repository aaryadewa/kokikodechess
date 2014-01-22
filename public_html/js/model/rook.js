define(['lodash', 'model/piece'],
    function(_, Piece) {

    var Rook = Class.create(Piece, {
        build: function($super) {
            this.defaults.name = 'rook';
            $super();
        }
    });

    return Rook;
});