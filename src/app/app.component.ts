import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './directive/highlight.directive';
import { VisibilityDirective } from './directive/visibility.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HighlightDirective, VisibilityDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showNumbers = false;
  array = [1,2,3,4,5,6,7,8];

  toggleNumbers() {
    this.showNumbers = true;
  }
}
