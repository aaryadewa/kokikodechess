/**
 *
 * Require JS configuration
 */
require.config({
    basePath: 'js',
    paths: {
        'domReady': 'lib/require-domReady-2.0.1/domReady',
        'lodash': 'lib/lodash-2.4.1/lodash',
        'prototype': 'lib/prototype-1.7.1.0/prototype'
    },
    shim: {
        'prototype': {
            exports: 'Prototype'
        }
    }
});

/**
 * Main app loader
 */
require(['domReady', 'prototype'], function(domReady) {
    domReady(function() {
        require(['model/board'], function(Board) {
            // build the board
            var board = new Board();
            board.build();
        });
    });
});