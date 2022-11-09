import { AfterViewChecked, AfterViewInit, Component, OnChanges, OnInit, DoCheck, AfterContentChecked, AfterContentInit, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` 
  <app-title *ngIf="destruir"></app-title>
  <br>
  <button (click)="destruirComponent()">Destruir Componente</button>
  <router-outlet></router-outlet>
   `
})
export class AppComponent implements OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit {
 
  public destruir: boolean = true;

  constructor(){ }

  public destruirComponent(){
    this.destruir = false;
  }
  ngOnInit(): void {
    
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  
  
}
