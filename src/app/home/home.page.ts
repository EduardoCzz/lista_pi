import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
  }

  variavel_lista = [];
  texto: string = "";
  variavel_valor = [];
  valor: number = 0;
  soma = 0;


  adiciona() {
    if (!(this.texto == "")) {

      this.variavel_valor.push(this.valor);
      this.variavel_lista.push(this.texto);
      this.valor = 0;

      this.texto = "";

    }
    this.somar();
  }

  remove(indice) {
    this.variavel_lista.splice(indice, 1)
    this.variavel_valor.splice(indice, 1)
  }

  somar() {
    this.variavel_valor.forEach(i => {
    parseInt(this.soma = this.soma + i);
    })
  }


  //*ngFor = "let elemento_da_lista of lista" no item
  //[(ngModel)]="texto" no input

}
