"use strict";
/* Nome: Diego Mendes Carloni
    Nome: Jaqueline Cassimiro */
function all(vs, fn) {
    for (let i = 0; i < vs.length - 1; i++) {
        if (!fn(vs[i], vs[i + 1]))
            return false;
    }
    ;
    return true;
}
;
console.log(all([1, 2, 4, 5, 6, 8], (x, y) => x < y));
