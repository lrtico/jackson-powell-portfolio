import { trigger, state, style, animate, transition, query, group } from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  state('void', style({ opacity: 0 })),
  transition(':enter', [
    animate('1000ms cubic-bezier(0.8, 0, 0.2, 1)', style({ opacity: 1 }))
  ]),
  transition(':leave', [
    animate('1000ms cubic-bezier(0.8, 0, 0.2, 1)', style({ opacity: 0 }))
  ]),
]);

export const richTooltipAnimation = trigger('richTooltipAnimation', [
  state('void', style({ opacity: 0, top: '110%' })),
  transition(':enter', [
    animate('400ms cubic-bezier(0.8, 0, 0.2, 1)', style({ opacity: 1, top: '100%'}))
  ]),
  transition(':leave', [
    animate('400ms cubic-bezier(0.8, 0, 0.2, 1)', style({ opacity: 0, top: '110%'}))
  ]),
]);

export const wipeAnimation = trigger('wipeAnimation', [
  transition('idle => in', [
    style({ transform: 'translateX(-100%)' }),
    animate('500ms ease-in-out', style({ transform: 'translateX(0%)' }))
  ]),
  transition('in => out', [
    style({ transform: 'translateX(0%)' }),
    animate('500ms ease-in-out', style({ transform: 'translateX(100%)' }))
  ])
]);

export const routeAnimations = trigger('routeAnimations', [
  transition('About => Work', [
    query('.about-text, .about-svg', style({ position: 'relative' }), { optional: true }),
    group([
      query('.about-text', [
        animate('900ms cubic-bezier(0.2, 0.8, 0.6, 1)', style({ opacity: 0, transform: 'translateY(-100px)' }))
      ], { optional: true }),
      query('.about-svg', [
        animate('900ms cubic-bezier(0.2, 0.8, 0.6, 1)', style({ opacity: 0, transform: 'translateY(100vh)' }))
      ], { optional: true }),
    ])
  ]),
  transition('Work => About', [
    query('.about-text', [
      style({ opacity: 0, transform: 'translateY(-100px)' }),
      animate('900ms cubic-bezier(0.8, 0, 0.2, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
    ], { optional: true }),
    query('.about-svg', [
      style({ opacity: 0, transform: 'translateY(100vh)' }),
      animate('900ms cubic-bezier(0.8, 0, 0.2, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
    ], { optional: true }),
  ]),
]);

export const slideSvgDown = trigger('slideSvgDown', [
  state('in', style({ transform: 'translateY(0)', opacity: 1 })),
  state('out', style({ transform: 'translateY(66%)', opacity: 0 })),
  transition('in => out', [
    animate('600ms cubic-bezier(0.75, 0, 0.25, 1)')
  ]),
  transition('out => in', [
    animate('600ms cubic-bezier(0.75, 0, 0.25, 1)')
  ]),
]);