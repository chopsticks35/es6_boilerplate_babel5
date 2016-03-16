/* load all './test/*-spec.es6' files */
var context = require.context('.', true, /spec.es6/)
context.keys().forEach(context)
