define(['lodash', 'model/piece'],
    function(_, Piece) {

    var Knight = Class.create(Piece, {
        build: function($super) {
            this.defaults.name = 'knight';
            $super();
        }
    });

    return Knight;
});