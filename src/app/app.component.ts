import {Component} from '@angular/core';

@Component({
             selector   : 'app-root',
             templateUrl: './app.component.html',
             styleUrls  : ['./app.component.scss']
           })
export class AppComponent {
  readonly title = 'angular-lifecycle';
  showLifeCycleDemo = false;
  count = 0;

  flipShowLifeCycleState(): void {
    this.showLifeCycleDemo = !this.showLifeCycleDemo;
  }

  incrementCount(): void {
    this.count++;
  }
}
