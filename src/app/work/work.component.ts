import { Component, OnDestroy } from '@angular/core';
import { RouteTransitionService } from '../services/transition-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-work',
  imports: [],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent implements OnDestroy {
  private sub: Subscription;

  constructor(private transition: RouteTransitionService) {
    this.sub = this.transition.animateOut$.subscribe((continueNav) => {
      continueNav();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
