const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
	constructor(){}
  	calculateDepth(arr) {
  		let depthMaximum = 1;
    	arr.forEach((item)=>{
      		let depth = 1;
        	if(Array.isArray(item)) {
            	depth += this.calculateDepth(item);
            	depthMaximum = Math.max(depthMaximum, depth)
        	}
        	depth = 0;
    	}) 
    return depthMaximum
	}
}