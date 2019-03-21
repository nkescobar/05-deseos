import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];
  constructor() { 
    const list1 = new Lista('Recolectar piedras del infinito');
    const list2 = new Lista('heroes desapareces')
    this.listas.push(list1, list2);
		console.log('TCL: DeseosService -> constructor -> this.listas', this.listas);
  }
}
