// File TListaGatti.ts che definisce l'interfaccia IGatto per tipizzare i dati dei gatti.

export interface IGatto {
    id: number;
    name: string;
    age: number;
    breed: string;
    color: string;
}