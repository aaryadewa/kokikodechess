define(['lodash', 'model/piece'],
    function(_, Piece) {

    var Queen = Class.create(Piece, {
        build: function($super) {
            this.defaults.name = 'queen';
            $super();
        }
    });

    return Queen;
});