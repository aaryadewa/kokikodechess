define(['lodash', 'model/piece'],
    function(_, Piece) {

    var King = Class.create(Piece, {
        build: function($super) {
            this.defaults.name = 'king';
            $super();
        }
    });

    return King;
});