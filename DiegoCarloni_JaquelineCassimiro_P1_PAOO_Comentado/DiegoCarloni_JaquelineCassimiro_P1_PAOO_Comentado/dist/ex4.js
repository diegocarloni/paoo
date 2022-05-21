"use strict";
/* Nome: Diego Mendes Carloni
    Nome: Jaqueline Cassimiro */
function some(vs, fn) {
    for (let i = 0; i < vs.length - 1; i++) {
        if (fn(vs[i], vs[i + 1]))
            return true;
    }
    ;
    return false;
}
;
console.log(some([1, 2, 4, 3, 6, 8], (x, y) => x > y));
