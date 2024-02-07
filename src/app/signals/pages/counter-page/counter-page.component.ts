import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css'],
})
export class CounterPageComponent {
  public counter = signal(10);
  public squareCounter = computed(() => this.counter() * this.counter()); //<- los computed son de solo lectura.

  increaseBy(value: number) {
    // this.counter.set(this.counter() + value); <- una forma de hacerlo, pero no se ve bien.

    this.counter.update((current) => current + value);
  }
}
