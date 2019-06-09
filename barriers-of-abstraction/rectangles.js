export const makeRectangle = (p, w, h) => cons(p, cons(w, h)) 
export const getStartPoint = (r) => car(r)

export const getWidth = (r) => getX(cdr(r))
export const getHeight = (r) => getY(cdr(r))

export const square = (r) => getWidth(r) * getHeight(r)
export const perimeter = (r) => 2 * (getWidth(r) + getHeight(r))

export const containsTheOrigin = (r) => {
  const p1 = getStartPoint(r)
  const p2 = makePoint(getX(p1) + getWidth(r), getY(p1) - getHeight(r))
  return quadrant(p1) === 2 && quadrant(p2) === 4;
}