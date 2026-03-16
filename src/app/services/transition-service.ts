import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RouteTransitionService {
  private isLocked = false;
  private animateOutSubject = new Subject<() => void>();
  animateOut$ = this.animateOutSubject.asObservable();

  private barAnimationSubject = new Subject<() => void>();
  barAnimation$ = this.barAnimationSubject.asObservable();

  get transitionLocked() {
    return this.isLocked;
  }

  lockTransition() {
    this.isLocked = true;
  }

  unlockTransition() {
    this.isLocked = false;
  }

  requestAnimateOut(continueNav: () => void) {
    this.animateOutSubject.next(continueNav);
  }

  requestBarAnimation(continueWithContent: () => void) {
    if (this.isLocked) {
      return;
    }
    this.lockTransition();
    this.barAnimationSubject.next(continueWithContent);
  }
}
