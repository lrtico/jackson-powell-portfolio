import { Component, OnDestroy } from '@angular/core';
import { RouteTransitionService } from '../services/transition-service';
import { Subscription } from 'rxjs';
import { slideSvgDown, richTooltipAnimation } from '../../animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  animations: [richTooltipAnimation, slideSvgDown],
  imports: [MatButtonModule, MatIconModule]
})
export class AboutComponent implements OnDestroy {
  svgState: 'in' | 'out' = 'in';
  private continueNav: (() => void) | null = null;
  private sub: Subscription;

  showDetailsMatterTooltip = false;

  constructor(private transition: RouteTransitionService) {
    this.sub = this.transition.animateOut$.subscribe((continueNav) => {
      this.continueNav = continueNav;
      this.svgState = 'out';
    });
  }

  onAnimationDone(event: any) {
    if (event.toState === 'out' && this.continueNav) {
      this.continueNav();
      this.continueNav = null;
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
