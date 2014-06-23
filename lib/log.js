"use strict";
module.exports = function(value, opts, next){
	// If there are no options, then default it to an empty object
	if ( opts == null ) {
		opts = {}
	}
	// If the options is a string or function, it must be our message we want to log
	else if ( typeof opts === 'string' || typeof opts === 'function' ) {
		opts = {message:opts}
	}

	// Do we want to use colors? Yes by default
	if ( opts.colors == null ) {
		opts.colors = true
	}

	// If our message is a funciton, call it, using the current context and chain value
	if ( typeof opts.message === 'function' ) {
		opts.message = opts.message.call(this, value)
	}
	// Otherwise, if we have no message, then use the chain's value
	else if ( opts.message == null ) {
		opts.message = value
	}

	// Output our message
	var message = require('util').inspect(opts.message, opts)
	var stdout = (opts.stdout || process.stdout)
	if ( stdout ) {
		stdout.write(message+'\n')
	} else {
		console.log(message)
	}

	// Complete
	next()  // as opts is optional, next is required
}
module.exports.extensionType = 'action'