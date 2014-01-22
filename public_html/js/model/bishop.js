define(['lodash', 'model/piece'],
    function(_, Piece) {

    var Bishop = Class.create(Piece, {
        build: function($super) {
            this.defaults.name = 'bishop';
            $super();
        }
    });

    return Bishop;
});