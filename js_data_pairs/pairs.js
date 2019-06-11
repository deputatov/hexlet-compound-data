const cons = (a, b) => 2 ** a * 3 ** b

const findMultiplier = (p, d, c = 0) => p % d === 0 ? findMultiplier(p / d, d, c += 1) : c

const car = (p) => {
    // let counter = 0;
    // while (p % 2 === 0) {
    //     counter += 1
    //     p = p / 2
    // }
    // return counter

    return findMultiplier(p, 2)

}

const cdr = (p) => findMultiplier(p, 3)
const pair = cons(5, 8)
console.log(car(pair))
console.log(cdr(pair))