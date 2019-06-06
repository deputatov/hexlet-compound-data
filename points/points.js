export const getQuadrant = (p) => {
  const x = getX(p)
  const y = getY(p)
  if (x > 0 && y > 0) {
    return 1
  } else if (x < 0 && y > 0) {
    return 2
  } else if (x < 0 && y < 0) {
    return 3
  } else if (x > 0 && y < 0) {
    return 4
  } else {
    return null
  }
}

export const getSymmetricalPoint = (p) => makePoint(-getX(p), -getY(p))

export const calculateDistance = (p1, p2) => Math.sqrt((getX(p2) - getX(p1)) ** 2 + (getY(p2) - getY(p1)) ** 2)