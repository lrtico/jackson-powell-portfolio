import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationStart } from '@angular/router';
import { PrimaryNavComponent } from "./primary-nav/primary-nav.component";
import { routeAnimations } from '../animations';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { RouteTransitionService } from './services/transition-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PrimaryNavComponent, RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routeAnimations,
    trigger('rectSlide', [
      state('start', style({ transform: 'translateX(100%)' })),
      state('end', style({ transform: 'translateX(-100%)' })),
      transition('start => end', [
        animate('2000ms {{delay}} cubic-bezier(0.1, 0, .9, 0.66)')
      ], { params: { delay: '0ms' } })
    ])
  ],
})
export class AppComponent {
  title = 'The Portfolio of Jackson Powell';

  showRouteRect = false;
  rectState = 'start';
  private finishedBars = 0;
  private continueWithContent: (() => void) | null = null;

  constructor(private router: Router, private transition: RouteTransitionService) {
    this.transition.barAnimation$.subscribe((continueWithContent) => {
      this.continueWithContent = continueWithContent;
      this.showRouteRect = true;
      this.rectState = 'start';
      this.finishedBars = 0;
      setTimeout(() => this.rectState = 'end', 10);
      setTimeout(() => {
        if (this.continueWithContent) {
          this.continueWithContent();
          this.continueWithContent = null;
        }
      }, 1000);
    });
  }

  onRectSlideDone(event: any) {
    if (event.toState === 'end') {
      this.finishedBars++;
      if (this.finishedBars === 3) {
        this.showRouteRect = false;
        this.transition.unlockTransition();
      }
    }
  }

  getRouteAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
