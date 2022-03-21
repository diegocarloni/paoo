/*type NaoVazia = [number, Lista];
type Lista = [NaoVazia] | undefined;*/
//type Lista = [number, Lista] | undefined;

type NaoVazia<A> = [A, Lista<A>];
type Lista<A> = NaoVazia<A> | undefined;

/*function cabeca(lista: NaoVazia) : number {
        return lista[0];
}*/

function cabeca<A>(lista: NaoVazia<A>) : A {
    return lista[0];
}

/*function cauda(lista: NaoVazia) : Lista {
        return lista[1];
}*/

function cauda<A>(lista: NaoVazia<A>) : Lista<A> {
    return lista[1];
}

/*function eh_vazia(lista: Lista) : boolean {
        return lista == undefined;
}*/

function eh_vazia<A>(lista: Lista<A>) : boolean {
    return lista == undefined;
}

/*function constroi(cabeca: number, cauda: Lista) : Lista {
        return [cabeca, cauda];
}*/

function constroi<A>(cabeca: A, cauda: Lista<A>) : NaoVazia<A> {
    return [cabeca, cauda];
}

//recebe inicio <= fim
// Devolve uma lista com os numeros inicio, inicio+1, .... end-1
/*function cria_lista(inicio: number, fim: number): Lista {
        /*if(inicio == fim) return undefined;
        return constroi(inicio, cria_lista(inicio+1, fim));*/
        /*return inicio == fim
                    ? undefined //se 
                    : constroi(inicio, cria_lista(inicio+1, fim)); //senao
}*/

function cria_lista(inicio: number, fim: number): Lista<number> {
    return inicio == fim
                ? undefined //se 
                : constroi(inicio, cria_lista(inicio+1, fim)); //senao
}

/*function para_string(lista: Lista) : string {
        return lista == undefined
                    ? 'undefined' //se
                    : `[${cabeca(lista)}, ${para_string(cauda(lista))}]` //senao
} */

function para_string<A>(lista: Lista<A>) : string {
    return lista == undefined
                ? 'undefined' //se
                : `[${cabeca(lista)}, ${para_string(cauda(lista))}]` //senao
} 

function map<A, B>(lista: Lista<A>, f: (a: A) => B): Lista<B> {
        return lista == undefined
                ?undefined
                : constroi(f(cabeca(lista)), map(cauda(lista), f));    
}

const strs = constroi('maria', constroi('joana', constroi('amanda', undefined)));
const comps = map(strs, s => s.length);
console.log(comps);

const lista = cria_lista(2,6);
const outra = cria_lista(10,20);
const ll = constroi(lista, constroi(outra, undefined));
console.log(cabeca(ll));
console.log(para_string(lista));
const nomes = constroi('maria', constroi('joana', undefined));
console.log(para_string(nomes));