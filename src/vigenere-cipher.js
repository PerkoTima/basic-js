const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
	constructor(modifier){
		if(modifier === false) {
    		this.modification = 'reverse'
    	}
    	else {
    		this.modification = 'direct'
    	}
	}
  	encrypt(message, key) {
	    let arr = [],
	    	stringArr = '',
			changeMessage = message.toLowerCase().split('').filter(item => item.charCodeAt() >= 97 && item.charCodeAt() <= 122),
			newKey = (key.toLowerCase().repeat(Math.ceil(changeMessage.length / key.length))).slice(0, changeMessage.length)
	    changeMessage.map((item, index) => {
	        (item.charCodeAt() - 97) + (newKey[index].charCodeAt() - 97) >= 26 ? arr.push((item.charCodeAt() - 97) + (newKey[index].charCodeAt() - 97) - 26 + 97):  arr.push((item.charCodeAt() - 97) + (newKey[index].charCodeAt() - 97) + 97)
	    })
	    message.split('').map((item, index) => {((message[index].charCodeAt() < 65 && 31 < message[index].charCodeAt()) || message[index].charCodeAt() === 94 || message[index].charCodeAt() === 124) && arr.splice(index, 0, message[index].charCodeAt())})
	    arr.map(item => {stringArr += String.fromCharCode(item)})
		return this.modification==='reverse' ? stringArr.split('').reverse().join('').toUpperCase() : stringArr.toUpperCase()
	}    
	decrypt(message, key) {
		let arr = [],
			stringArr = '',
			changeMessage = message.toLowerCase().split('').filter(item => item.charCodeAt() >= 97 && item.charCodeAt() <= 122),
			newKey = (key.toLowerCase().repeat(Math.ceil(changeMessage.length / key.length))).slice(0, changeMessage.length)
		changeMessage.map((item, index) => {
		    (item.charCodeAt() - 97) - (newKey[index].charCodeAt() - 97) < 0 ? arr.push((item.charCodeAt() - 97) - (newKey[index].charCodeAt() - 97) + 26 + 97):  arr.push((item.charCodeAt() - 97) - (newKey[index].charCodeAt() - 97) + 97)
		})
		message.split('').map((item,index)=>{((message[index].charCodeAt() < 65 && 31 < message[index].charCodeAt()) || message[index].charCodeAt() === 94 || message[index].charCodeAt() === 124) && arr.splice(index, 0, message[index].charCodeAt())})
		arr.map(item => {stringArr += String.fromCharCode(item)})
		return this.modification === 'reverse' ? stringArr.split('').reverse().join('').toUpperCase() : stringArr.toUpperCase();
	}
}

module.exports = VigenereCipheringMachine;
