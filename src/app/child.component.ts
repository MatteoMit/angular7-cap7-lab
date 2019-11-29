import { Component } from "@angular/core";

@Component({
  selector: "app-child",
  template: `
    <div>
      <ng-content></ng-content>
    </div>
  `,
  styles: []
})
export class ChildComponent {}
