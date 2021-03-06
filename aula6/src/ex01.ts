/*
class Pessoa {
            //invariante: nome.length > 0 && idade > 0
            private nome: string;
            private idade: number;

        constructor(nome: string, idade: number) {
            if (nome.length == 0)
                throw new Error('Nome inválido');
            if (idade < 0)
                throw new Error('Nome inválido');
            this.nome = nome;
            this.idade = idade;
        }

        getNome() { return this.nome; }
}

const joao = new Pessoa('Joao', 20); 
*/

/*
class Pessoa {
    //invariante: nome.length > 0 && idade > 0
    private _nome: string;
    private _idade: number;

constructor(nome: string, idade: number) {
    if (nome.length == 0)
        throw new Error('Nome inválido');
    if (idade < 0)
        throw new Error('Nome inválido');
    this._nome = nome;
    this._idade = idade;
}

    get nome() { return this._nome; }
    set nome(umNome: string) {
        if (umNome.length == 0)
            throw new Error ('Nome invalido');
            this._nome = umNome;
        }
    get idade() { return this._idade; }
}

const joao = new Pessoa('Joao', 20);
joao.nome = ''; // joao.nome('Joao Manuel')
console.log(joao.nome); 
*/

/*
class Pessoa {
        constructor(public nome: string, public idade: number) {}
}

const joao = new Pessoa('Joao', 10);
console.log(joao.nome)
*/

class Pessoa {
    //invariante: nome.length > 0 && idade > 0
    constructor(private _nome: string, private _idade: number) {
    if (this._nome.length == 0)
        throw new Error('Nome inválido');
    if (this._idade < 0)
        throw new Error('Nome inválido');
}

get nome() { return this._nome; }
set nome(umNome: string) {
        if (umNome.length == 0)
            throw new Error ('Nome invalido');
            this._nome = umNome;
        }
    get idade() { return this._idade; }
}

const maria = new Pessoa('Maria', 20);
console.log(maria.nome); 

maria.nome = 'Maria Jose';
