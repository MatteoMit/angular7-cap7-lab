import { Component } from "@angular/core";
@Component({
  selector: "app-random",
  template: `
    <div>
      <span>{{ random }}</span>
      <button (click)="onClick()">Genera numero casuale</button>
    </div>
  `,
  styles: []
})
export class RandomComponent {
  random = 0;
  
  onClick(): void {
    this.random = Math.floor(Math.random() * 100);
  }
}
