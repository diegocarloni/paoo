"use strict";
// Arrow Function = é uma função anonima (Não possui nome), é uma função seta !!!
const sq = (x) => x * x;
x * x;
console.log(maximo2(10, 20));
function maximo2(x, y) { return x >= y ? x : y; }
const maximo = (xs) => {
    if (xs.length == 0)
        return undefined;
    let cand = xs[0];
    for (const x of xs)
        if (x > cand)
            cand = x;
    return cand;
};
console.log(maximo([1, 3, 4, 5]));
console.log(sq(5));
