const findPrimitiveBox = (pair) => {
    if (isPair(car(pair))) {
        return findPrimitiveBox(car(pair))
    } else if (isPair(cdr(pair))) {
        return findPrimitiveBox(cdr(pair))
    } else {
        return pair
    }
} 