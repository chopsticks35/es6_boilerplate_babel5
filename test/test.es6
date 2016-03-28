/* load all './test/*-spec.es6' files */
var context = require.context('.', true, /\.test.es6/)
context.keys().forEach(context)
