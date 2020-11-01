const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
	let turns = Number((2 ** disksNumber - 1)),
    seconds = Math.floor(turns / (turnsSpeed / 3600));
  	return {
    turns,
    seconds
  };
};
