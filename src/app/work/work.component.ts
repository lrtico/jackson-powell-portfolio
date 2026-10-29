import { AnimationEvent } from '@angular/animations';
import { Component, OnDestroy } from '@angular/core';
import { RouteTransitionService } from '../services/transition-service';
import { Subscription } from 'rxjs';
import { slideSvgDown } from '../../animations';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
  animations: [slideSvgDown]
})
export class WorkComponent implements OnDestroy {
  private sub: Subscription;
  svgState: 'in' | 'out' = 'in';
  private continueNav: (() => void) | null = null;

  constructor(private transition: RouteTransitionService) {
    this.sub = this.transition.animateOut$.subscribe((continueNav) => {
      this.continueNav = continueNav;
      this.svgState = 'out';
    });
  }

  onAnimationDone(event: AnimationEvent) {
    if (event.toState === 'out' && this.continueNav) {
      this.continueNav();
      this.continueNav = null;
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}