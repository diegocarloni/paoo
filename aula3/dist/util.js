"use strict";
// recebe xs: number[] tal que xs.lenght > 0
// e devolve um elemento maximo de xs
function maxv0(xs) {
    let cand = xs[0];
    for (const x of xs) {
        if (x > cand) {
            cand = x;
        }
    }
    return cand;
}
console.log(maxv0([2, 5, 9, 8, 3, 5]) + 2);
console.log(maxv0([]) + 2); // undefined
// versão com o undefined, agora definido, junto com o number
function max(xs) {
    if (xs.length == 0)
        return undefined;
    let cand = xs[0];
    for (const x of xs) {
        if (x > cand) {
            cand = x;
        }
    }
    return cand;
}
const r = max([2, 5, 9, 8, 3, 5]);
if (r != undefined)
    console.log(r + 2);
// função
function maxByv0(xs, key) {
    if (xs.length == 0)
        return undefined;
    let cand = xs[0];
    for (const x of xs)
        if (key(x) > key(cand))
            cand = x;
    return cand;
}
/* const r = max([2, 4, 1, 8, 3, 5]);
if (r != undefined) console.log(r + 2); */
function square(x) { return x * x; }
console.log(maxBy([-4, 2, 3, -8, 5, 7], square));
// função string
// Escreva uma função que recebe xs: string [] e uma função
// key: (s: string) => number e devolve undefined se xs é vazio, ou,
// em caso contrário, devolve uma string s de xs cuja chave  key(s)
// é máxima.
function maxByStr(xs, key) {
    if (xs.length == 0)
        return undefined;
    let cand = xs[0];
    for (const x of xs)
        if (key(x) > key(cand))
            cand = x;
    return cand;
}
function maxBy(xs, key) {
    if (xs.length == 0)
        return undefined;
    let cand = xs[0];
    for (const x of xs)
        if (key(x) > key(cand))
            cand = x;
    return cand;
}
function minBy(xs, key) {
    /*function invkey(x : A) : number {
        return -key(x);
    }*/
    return maxBy(xs, x => -key(x));
    /*return maxBy(xs, invkey); */
}
function len(s) { return s.length; }
console.log(maxBy(['aaaa', 'bb', 'hhhhhh', 'kkkk', 'j'], len));
// exemplo
function grade(s) {
    switch (s) {
        case 'maria': return 10;
        case 'joão': return 8;
        case 'ana': return 6;
        default: return 4;
    }
}
console.log(maxBy(['joão', 'manuel', 'maria', 'ana'], grade));
function invgrade(s) { return -grade(s); }
console.log(maxBy(['joão', 'manuel', 'maria', 'ana'], invgrade));
console.log(minBy(['joão', 'manuel', 'maria', 'ana'], grade));
