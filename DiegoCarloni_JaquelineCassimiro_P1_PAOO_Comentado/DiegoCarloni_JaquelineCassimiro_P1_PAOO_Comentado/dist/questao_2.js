"use strict";
/* Nome: Diego Mendes Carloni
    Nome: Jaqueline Cassimiro */
/* Questão 2 */
function all(vs, fn) {
    /* vs é um vetor do tipo number  */ /* a função fn recebe dois numbers e retorna um boolean */
    for (let i = 0; i < vs.length - 1; i++) {
        /* laço que vai percorrer o vetor vs, usamos vs.length-1 considerando que o laço inicia em 0, assim percorre todo vetor*/
        if (!fn(vs[i], vs[i + 1]))
            return false;
        /* condição que retorna falso se não atender a função fn */
        /* o ! é como um 'not' então ele inverte o boolean da função, só entra no if se retornar falso*/
    }
    ;
    return true;
    /* retorno padrão é true, caso não entre na condição. Logo, satifaz fn. */
}
;
console.log(all([1, 2, 4, 5, 6, 8], (x, y) => x < y));
