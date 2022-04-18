/*
const set = new Set<number>();
set.add(10);
set.add(20);
set.add(10);
console.log(set);
*/

/*
class NSet {
        // O array elements nao contem elementos repetidos
        private _elements: number[] = [];
        get elements() { return this._elements; }
}

const s = new NSet ();
const es = s.elements;
es.push(10);
es.push(10);
console.log(s.elements);

//ERRADO !!!
*/

class NSet {
    // O array elements nao contem elementos repetidos
    private elements: number[] = [];

    constructor(xs: number[]) {
            for (const x of xs) this.add(x);
    }

    // Para cada objeto obj: NSet
    // e cada x: number (do tipo number)  vale que:
    // obj.add(x)
    //obj.add(x) -> true
    add(x: number): void {
            const idx = this.elements.indexOf(x);
            if (idx == -1) this.elements.push(x); // Se idx == -1 entao x nao e elemento de elements
    }
    has(x: number): boolean {
            return this.elements.indexOf(x) != -1;
    }
    remove(x: number): void {
            const idx = this.elements.indexOf(x);
            if (idx != -1) {
                const last = this.elements.length-1;
                this.elements[idx] = this.elements[last];
                this.elements.pop();
            }
        }
}

const conj = new NSet ([1, 4, 2, 1, 1, 3]);
conj.add(8);
console.log(conj.has(8));
conj.remove(1);
console.log(conj.has(1));
