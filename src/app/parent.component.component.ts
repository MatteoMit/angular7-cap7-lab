import { Component } from "@angular/core";
@Component({
  selector: "app-root",
  template: `
    <app-child>
      <h1>{{ title }}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </app-child>
  `
})
export class ParentComponent {
  title = "Esempio ng-content";
}
