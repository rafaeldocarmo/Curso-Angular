import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-title title="Texto Alterado no App Component pelo Input"></app-title>
  <router-outlet></router-outlet>`
})

export class AppComponent implements OnInit {
  public title = "Bem Vindo!" 
  constructor() {}

  ngOnInit(): void {
    console.log(1)
    setTimeout(() => {console.log(2)}, 5000)

  }

}
