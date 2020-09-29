const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(arg) {
  let numArg = Number(arg)
  if(numArg !== Number){
  	return false
  }else{
  	const t = (Math.log10(MODERN_ACTIVITY / numArg))/(0.693 / HALF_LIFE_PERIOD)
  	return Math.ceil(t)
  }
};
