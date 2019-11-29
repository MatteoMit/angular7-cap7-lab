import { Component } from "@angular/core";
@Component({
  selector: "app-root",
  template: `
    <app-child>
      <button>Condividi</button>
      <span>Span element</span>

      <h1>{{ title }}</h1>
      <p class="text">
        Maecenas faucibus mollis interdum.
      </p>
      <app-random></app-random>
    </app-child>
  `
})
export class ParentComponent {
  title = "Esempio ng-content";
}
