export const make = (n, d) => cons(n, d)
export const numer = (r) => car(r)
export const denom = (r) => cdr(r)
export const toString = (r) => `${numer(r)} / ${denom(r)}`
export const isEqual = (r1, r2) => numer(r1) * denom(r2) === numer(r2) * denom(r1)
export const add = (r1, r2) => make(numer(r1) * denom(r2) + denom(r1) * numer(r2), denom(r1) * denom(r2))
export const sub = (r1, r2) => make(numer(r1) * denom(r2) - denom(r1) * numer(r2), denom(r1) * denom(r2))
export const mul = (r1, r2) => make(numer(r1) * numer(r2), denom(r1) * denom(r2))
export const div = (r1, r2) => make(numer(r1) * denom(r2), denom(r1) * numer(r2))