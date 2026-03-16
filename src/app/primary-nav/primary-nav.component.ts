import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { RouteTransitionService } from '../services/transition-service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { fadeInOut } from '../../animations';

@Component({
  selector: 'app-primary-nav',
  imports: [RouterLink, RouterLinkActive, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './primary-nav.component.html',
  styleUrl: './primary-nav.component.scss',
  animations: [fadeInOut]
})
export class PrimaryNavComponent {
  constructor(public router: Router, private transition: RouteTransitionService) {}

  onWorkClick(event: Event) {
    event.preventDefault();
    if (this.transition.transitionLocked) {
      return;
    }
    this.transition.requestBarAnimation(() => {
      if (this.router.url !== '/work') {
        this.transition.requestAnimateOut(() => {
          this.router.navigateByUrl('/work');
        });
      }
    });
  }

  onAboutClick(event: Event) {
    event.preventDefault();
    if (this.transition.transitionLocked) {
      return;
    }
    this.transition.requestBarAnimation(() => {
      if (this.router.url !== '/about') {
        this.transition.requestAnimateOut(() => {
          this.router.navigateByUrl('/about');
        });
      }
    });
  }
}
