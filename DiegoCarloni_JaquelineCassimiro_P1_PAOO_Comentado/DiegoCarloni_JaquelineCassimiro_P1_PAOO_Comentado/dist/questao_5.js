"use strict";
/* Nome: Diego Mendes Carloni
    Nome: Jaqueline Cassimiro */
/* Questão 5 */
function someGeneric(vs, fn) {
    /* função someGeneric segue a mesma lógica que a questão 2, mas não especificamos quais os tipos */
    for (let i = 0; i < vs.length - 1; i++) {
        /* laço que percorre o vetor */
        if (fn(vs[i], vs[i + 1]))
            return true;
        /* condição que retorna true se satifaz fn. */
    }
    ;
    return false;
    /* não entra na condição, logo não satifaz e retorna false.*/
}
;
console.log(someGeneric([1, 2, 4, 3, 6, 8], (x, y) => x > y));
