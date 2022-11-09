import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() public title: string = "Bem vindo";

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log("Foi Alterado com sucesso!");
  }
  ngOnDestroy(): void {
    console.log("Componente foi Destruido");
  }
}
