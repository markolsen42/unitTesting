 var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var className = require('../src/className.js');
var addClass = className.addClass;
var promiseModule = require('../src/promiseClass.js');
var promiseFnEven = promiseModule.promiseFnEven;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

describe('chai as promised', () =>{
	it('simple cap', () => {
		return expect(promiseFnEven(4)).to.eventually.equal(2);
	});
})

describe('Promises', () => {
	it('test the promise', (done) => {
		promiseFnEven(4).then( (data) => {
			expect(data).to.equal(2);
			done();
		}).catch(err => {
			assert.fail(err);
			done();
		})
	});
	it('should fail', () => {
		return promiseFnEven(3);
	});
	it('better test fails', () => {
		return promiseFnEven(3).then( (data) => {
			expect(data).to.equal(2);	
		});
	});
	it('better test passes', () => {
                return promiseFnEven(4).then( (data) => {
                        expect(data).to.equal(2);
                });
        });
});


describe('Array', function() {
	  it('should start empty', function() {
		      var arr = [];

		      assert.equal(arr.length, 0);
		    });
	it('put new test here');
});
describe('addClass', function() {
	  it('should add class into element', function() {
		      var element = { className: '' };

		      addClass(element, 'test-class');

		      assert.equal(element.className, 'test-class');
		    });  
	  
	  it('should not add a class which already exists in element', function() {
		      var element = { className: 'exists' };

		      addClass(element, 'exists');

		      var numClasses = element.className.split(' ').length;
		      assert.equal(numClasses, 1);
		    });
	  
	  it('should append new class after existing one', function() {
		      var element = { className: 'exists' };

		      addClass(element, 'new-class');

		      var classes = element.className.split(' ');
		      assert.equal(classes[1], 'new-class');
		    });
});
