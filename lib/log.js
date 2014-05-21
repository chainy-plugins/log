module.exports = function(opts,next){
	"use strict";
	if ( opts == null )  opts = {}
	if ( opts.colors == null )  opts.colors = true
	console.log(require('util').inspect(this.data, opts))
	next()  // as opts is optional, next is required
}