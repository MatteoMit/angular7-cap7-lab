import { Component } from "@angular/core";
@Component({
  selector: "app-child",
  template: `
    <div class="heading">
      <ng-content select="h1"></ng-content>
    </div>
    <div class="main">
      <ng-content select=".text"></ng-content>
    </div>
    <div class="component">
      <ng-content select="app-random"></ng-content>
    </div>
    <div class="action">
      <ng-content></ng-content>
    </div>
  `
})
export class ChildComponent {}
