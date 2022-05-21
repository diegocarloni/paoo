/* Nome: Diego Mendes Carloni
    Nome: Jaqueline Cassimiro */

    /* Questão 1 */

function maxMin(vs: number[]): [number, number] | undefined {
    if (vs.length == 0) return undefined; 
/* condição que confirma se o vs está vazio*/
    let max: number = vs[0]; 
/* criando o max */
    let min: number = vs[0]; 
/* criando o min */
    for (const v of vs) { 
/* criação do laço que percorre todo o vs */
        if (v > max) max = v; 
/* condição que armazena o maximo */
        if (v < min) min = v; 
/* condição que armazena o min */
    };
    return [max, min]; 
/* retorno da condição, com maximo e minimo */
};

console.log(maxMin([10, 15, 85, 62, 1, 6]))