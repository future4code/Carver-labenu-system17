// Fazer enum do modulo
// Fazer classe de estudantes
export default class Turma {
    private _id: string;
    private _nome: string;
    private _docentes: string[];
    private _estudantes: any[];
    private _modulo: number;

    constructor(
        id: string,
        nome: string,
        docentes: string[],
        estudantes: any,
        modulo: number
    ) {
        this._id = id;
        this._nome = nome;
        this._docentes = docentes;
        this._estudantes = estudantes;
        this._modulo = modulo;
    }

    // Fazer getters e setters
    //Outros métodos da classe turma
}
