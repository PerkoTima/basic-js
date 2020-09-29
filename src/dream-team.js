const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
	let dreamTeam = ''
	let new_arr = []
	if(Array.isArray(arr)){
		new_arr = arr.filter(elem => typeof elem  === 'string').map(elem => elem.toUpperCase().trim()).sort()
		for(let i = 0; i < new_arr.length; i++){
			dreamTeam += new_arr[i][0]
		}
		return dreamTeam
	}else{
		return false
	}
	
		
};
