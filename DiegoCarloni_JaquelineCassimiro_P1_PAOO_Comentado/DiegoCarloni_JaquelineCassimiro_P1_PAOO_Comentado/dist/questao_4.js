"use strict";
/* Nome: Diego Mendes Carloni
    Nome: Jaqueline Cassimiro */
/* Questão 4 */
function some(vs, fn) {
    /* vs é um vetor do tipo number  */ /* a função fn recebe dois numbers e retorna um boolean */
    for (let i = 0; i < vs.length - 1; i++) {
        /* laço que vai percorrer o vetor seguindo a mesma regra da questão 2: usamos vs.length-1 considerando que o laço inicia em 0,
        assim percorre todo vetor*/
        if (fn(vs[i], vs[i + 1]))
            return true;
        /* condição que returna true quando satifaz fn, quando pelo menos um par é consecutivo */
    }
    ;
    return false;
    /* não entra na condição, logo não satifaz e retorna false.*/
}
;
console.log(some([1, 2, 4, 3, 6, 8], (x, y) => x > y));
