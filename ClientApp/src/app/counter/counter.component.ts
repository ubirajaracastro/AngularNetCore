import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;
  public nome;

  public incrementCounter() {
    this.currentCount++;
    this.nome = 'UBIRAJARA CASTRO';
  }



}
