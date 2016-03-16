import add from './partA.es6'
// import subtract from './partB.es6'
// require('./main.css')
// import './main.css'

class Person {
  constructor() {
    this.named = 'Johnny'
    this.sum = add
  }
  greet() {
    return `hello ${this.named}`
  }
  shout() {
    return this.named.toUpperCase()
  }
}

 let a =  new Person()

export default a
