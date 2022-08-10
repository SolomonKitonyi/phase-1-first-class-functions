function receivesAFunction(cb) {
    cb();
}
function returnsANamedFunction () {
    function cb() {
        console.log("I am a function");
    }
    return cb;
}
function returnsAnAnonymousFunction () {
    return function() {
        console.log("I was returned");
    }
}
