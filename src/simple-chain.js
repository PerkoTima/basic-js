const CustomError = require("../extensions/custom-error");

const chainMaker = {
  res:[],
  getLength() {
    return res.arr.length
  },
  addLink(value) {
    if (value === undefined) {
          value='( )';
          this.res.push( value )
      } else {
          this.res.push('('+ ' '+ value + ' '+ ')' )
      }
    return this
  },
  removeLink(position) {
    if (position < 0 || position === undefined) {
        this.res = []
        throw new Error
    }
    this.res.splice(position - 1,1)
    return this
  },
  reverseChain() {
    this.res.reverse()
    return this
  },
  finishChain() {
    let chain  = this.res.join('~~')
    this.res=[]
    return  chain
  }
};

module.exports = chainMaker;
