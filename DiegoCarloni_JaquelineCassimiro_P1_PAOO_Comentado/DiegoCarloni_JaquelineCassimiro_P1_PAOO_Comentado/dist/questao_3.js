"use strict";
/* Nome: Diego Mendes Carloni
    Nome: Jaqueline Cassimiro */
/* Questão 3 */
function allGeneric(vs, fn) {
    /* função allGeneric segue a mesma lógica que a questão 2, mas não especificamos quais os tipos */
    for (let i = 0; i < vs.length - 1; i++) {
        /* laço que vai percorrer o vetor */
        if (!fn(vs[i], vs[i + 1]))
            return false;
        /* condição que retorna falso se não atender a função fn */
    }
    ;
    return true;
    /* retorno padrão true, quando satifaz fn. */
}
;
console.log(allGeneric([1, 2, 4, 5, 6, 8], (x, y) => x < y));
