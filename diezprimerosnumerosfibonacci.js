function fib(position = 10, serie = []) {
    if(serie.length === position)
    return serie.pop()

    if(serie.length === 0) {
        serie.push(0)
    }
    else if(serie.length ===1) {
        serie.push(1)
    }
    else {
        const lastIndex = serie.length
        const next = serie[lastIndex-2] + serie[lastIndex-1]
        serie.push(next)
    }
    return fib(position,serie)
}