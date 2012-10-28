requirejs.config({
    baseUrl: 'javascripts/vendor/lib',
    paths: {
        app: '../../app'
    }
});

// Start the main app logic.
requirejs(['jquery', 'app/sub'],
function ($, sub) {
    console.log('Everything is loaded.');
});