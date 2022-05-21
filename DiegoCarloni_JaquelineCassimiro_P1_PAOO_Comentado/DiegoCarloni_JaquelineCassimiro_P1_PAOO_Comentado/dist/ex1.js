"use strict";
/* Nome: Diego Mendes Carloni
    Nome: Jaqueline Cassimiro */
function maxMin(vs) {
    if (vs.length == 0)
        return undefined;
    let max = vs[0];
    let min = vs[0];
    for (const v of vs) {
        if (v > max)
            max = v;
        if (v < min)
            min = v;
    }
    ;
    return [max, min];
}
;
console.log(maxMin([10, 15, 85, 62, 1, 6]));
