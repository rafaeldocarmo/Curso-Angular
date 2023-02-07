import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges{

  @Input() public title: string = "Bem vindo Componente!"

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log("Página foi ALterada com Input")
  }

}
