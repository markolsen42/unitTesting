// className.js

module.exports = {
	promiseFnEven: function(number){
	return new Promise((fulfill, reject) => {
		if (number%2===0){
			fulfill(number/2);
		} else {
			reject(new Error('odd'));
		} 
	})
  }
}
