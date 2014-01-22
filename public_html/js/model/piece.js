define(['lodash', 'constants'],
    function(_, Constants) {

    var Piece = Class.create({
        initialize: function(config) {
            this.piece = null;
            this.defaults = {
                type: Constants.PIECES.WHITE.PAWN,
                id: '1',
                name: 'pawn',
                color: (config.type < Constants.PIECES.BLACK.PAWN)? 'white': 'black',
                coord: {
                    x: 0, y: 0
                }
            };

            _.merge(this.defaults, config);
        },

        build: function() {
            var defaults = this.defaults;

            // creates the piece
            this.piece = new Element('div', {
                id: defaults.name+ '_' +defaults.color+ '_' +(defaults.type + 1),
                class: 'piece ' +defaults.name+ ' ' +defaults.color,
                draggable: true
            });
        },

        get: function() {
            return this.piece;
        }
    });

    return Piece;
});