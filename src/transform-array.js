const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
	let new_arr = []
	if(Array.isArray(arr)){
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === '--discard-next') {
				if ((arr[i + 2]) !== '--discard-prev' && (arr[i + 2]) !== '--double-prev') {
					i += 1
				}else{ i += 2}
			}else if (arr[i] === '--discard-prev'){
				new_arr.pop()
			}else if (arr[i] === '--double-next' ){
				if (arr[i + 1] !== undefined) {
					new_arr.push(arr[i + 1])
				}
			}else if (arr[i] === '--double-prev'){
				if (arr[i - 1] !== undefined) {
					new_arr.push(arr[i - 1])
				}
			}else{
				new_arr.push(arr[i])
			}
		}
		return new_arr
	}else{
		throw new Error
	}
};
