import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  public nome: string = 'Dener';
  public idade: number = 19;

  public checkedDisabled: boolean = false;
  public imgSrc: string = "https://angular.io/assets/images/logos/angular/logo-nav@2x.png"
  public imgTitle: string = "Angular";
  public imgAlt: string = "Angular";
  public position: {x: number, y: number} = {x: 0, y: 0}
  public alertaInfo(){
    alert("Deu bom")
  }

  public mousemoveTest(valor: MouseEvent){
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
