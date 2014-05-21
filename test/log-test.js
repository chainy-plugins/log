(function(){
	// Import
	var expect = require('chai').expect,
		joe = require('joe')

	// Test
	joe.describe('log plugin', function(describe,it){
		var Chainy = require('chainy-core').subclass().require('set').addExtension('log', require('../'))

		it("should fire successfully", function(next){
			var chain = Chainy.create()
				.set('some data')
				.log()
				.done(function(err, result){
					if (err)  return next(err)
					expect(result).to.equal('some data')
					expect(this).to.equal(chain)
					return next()
				})
		})
	})
})()
