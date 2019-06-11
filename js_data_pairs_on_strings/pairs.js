const cons = (x, y) => `${x}\0${y}` 
const car = (p) => p.slice(0, p.indexOf('\0'))
const cdr = (p) => p.slice(p.indexOf('\0')++, p.length)

const c = cons('one', 'two')

// console.log(car(c))
console.log(cdr(c))
