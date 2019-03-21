import { ListaItem } from './lista-item.model';


export class Lista {

    id: number;
    title: string;
    createIn: Date;
    terminatedIn: Date;
    terminated: boolean;
    items: ListaItem[];

    constructor (title: string) {
        this.title = title;
        this.createIn = new Date();
        this.terminated = false;
        this.items = [];
        this.id = new Date().getTime();
    }

}