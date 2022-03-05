const log = console.log;

function contador(inicial: number): () => number {
        return () => inicial++;
}

const c1 = contador(10);
const c2 =  contador(5);

log(c1());
log(c2());
log(c1());
log(c2());