const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	console.log(options)
  	let startOptions = {
  		repeatTimes: options.repeatTimes,
  		separator: options.separator || '+',
  		addition: options.addition,
  		additionRepeatTimes: options.additionRepeatTimes,
      additionSeparator: options.additionSeparator
    }
    console.log(startOptions)
    str = String(str)
    let result = '';
    if (options.addition === false || options.addition === null) {
        startOptions.addition = String(options.addition)
    }
    let methods = {
      addition() {
        if (startOptions.addition && startOptions.repeatTimes) {
          if (startOptions.additionSeparator === undefined){
            result = (startOptions.addition.toString())
                    .repeat(startOptions.additionRepeatTimes)
          } else {
            result = (startOptions.addition.toString() + startOptions.additionSeparator)
                                                        .repeat(startOptions.additionRepeatTimes)
                                                        .slice(0, -startOptions.additionSeparator.length)
          }  
        } else if (startOptions.addition) {
            result = startOptions.addition.toString()
        }
      }
    }

   methods.addition();
    return startOptions.repeatTimes ? ((str.toString() + result + startOptions.separator)
                                                                  .repeat(startOptions.repeatTimes))
                                                                  .slice(0, -startOptions.separator.length) : str.toString() + result
};
  