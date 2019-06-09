export const makeSegment = (p1, p2) => cons(p1, p2)

export const startSegment = (s) => car(s)

export const endSegment = (s) => cdr(s)

export const segmentToString = (s) => `[${pointToString(startSegment(s))}, ${pointToString(endSegment(s))}]`

export const midpointSegment = (s) => {
    const p1 = startSegment(s)
    const p2 = endSegment(s)
    const x = (getX(p1) + getX(p2)) / 2
    const y = (getY(p1) + getY(p2)) / 2
    return makePoint(x, y)
}