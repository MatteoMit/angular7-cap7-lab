import { Component } from "@angular/core";
@Component({
  selector: "app-root",
  template: `
    <app-child>
      <h1>{{ title }}</h1>
      <app-random></app-random>
    </app-child>
  `
})
export class ParentComponent {
  title = "Esempio ng-content";
}
