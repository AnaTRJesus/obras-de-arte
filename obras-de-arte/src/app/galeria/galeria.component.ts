import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {


  imagens: string[] = [
    "Imagem01",
    "Imagem02",
    "Imagem03",
    "Imagem04",
    "Imagem05",
    "Imagem06"
 
  ];

    mostrarimagem: boolean = true;

s
  constructor() { }

  ngOnInit() {
  }

  public esconderImagem(){

    this.mostrarimagem = false;
  }

  public mostrarImagem(){

    this.mostrarimagem = true;
  }

}
