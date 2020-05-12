import { trigger, animate, transition, style, group, query, keyframes, state } from '@angular/animations';

export const flipAnimation3 = trigger('flipAnimation', [
  transition('* <=> *', [
    query(':enter, :leave', style({ transform: 'rotateX(0deg)' }), { optional: true }),
    group([
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' })
        )], { optional: true }),
      query(':enter', [
        style({ transform: 'rotateX(90deg)' }),
        animate('1s ease-in-out', style({ transform: 'rotateX(0deg)' })
        )], { optional: true }),
    ]),
  ]),
]);

export const slideInAnimation5 = trigger('slideInAnimation', [
  transition('* <=> *', [
    query(':enter, :leave',
      style({ position: 'fixed', width: '100%' }),
      { optional: true }),
    group([
      query(':leave', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':enter', [
        style({ transform: 'rotateX(0)' }),
        animate('2s ease-in-out', keyframes([
          style({ transform: 'rotateX(0) scale(0)', offset: 0 }),
          style({ transform: 'rotateX(5) scale(0.1)', offset: 0.05 }),
          style({ transform: 'rotateX(10) scale(0.2)', offset: 0.1 }),
          style({ transform: 'rotateX(15) scale(0.3)', offset: 0.15 }),
          style({ transform: 'rotateX(20) scale(0.4)', offset: 0.2 }),
          style({ transform: 'rotateX(25) scale(0.5)', offset: 0.25 }),
          style({ transform: 'rotateX(30) scale(0.6)', offset: 0.3 }),
          style({ transform: 'rotateX(90) scale(1)', offset: 1 }),
        ]))
      ], { optional: true })
    ])
  ])
]);


export const slideInAnimation2 = trigger('slideInAnimation', [
  // Transition between any two states
  transition('* <=> *', [
    // Events to apply
    // Defined style and animation function to apply
    // Config object with optional set to true to handle when element not yet added to the DOM
    query(':enter, :leave', style({ position: 'absolute', width: '100%', zIndex: 2 }), { optional: true }),
    // group block executes in parallel
    group([
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-out', style({ transform: 'translateX(-100%)' }))
      ], { optional: true })
    ])
  ])
]);

export const slideInAnimation4 = trigger('slideInAnimation', [
  transition('* <=> *', [
    query(':enter, :leave',
      style({ position: 'fixed', width: '100%' }),
      { optional: true }),
    group([
      query(':leave', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':enter', [
        style({ transform: 'rotateX(0%)' }),
        animate('2s ease-in-out', keyframes([
          style({ transform: 'rotateX(0%) scale(0)', offset: 0 }),
          style({ transform: 'rotateX(5%) scale(0.1)', offset: 0.05 }),
          style({ transform: 'rotateX(10%) scale(0.2)', offset: 0.1 }),
          style({ transform: 'rotateX(15%) scale(0.3)', offset: 0.15 }),
          style({ transform: 'rotateX(20%) scale(0.4)', offset: 0.2 }),
          style({ transform: 'rotateX(25%) scale(0.5)', offset: 0.25 }),
          style({ transform: 'rotateX(30%) scale(0.6)', offset: 0.3 }),
          style({ transform: 'rotateX(90%) scale(1)', offset: 1 }),
        ]))
      ], { optional: true })
    ])
  ])
]);


export const slideInAnimation = trigger('slideInAnimation', [
  transition('* <=> *', [
    query(':enter, :leave',
      style({ position: 'fixed', width: '100%' }),
      { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('2s ease-in-out', keyframes([
          style({ transform: 'translateX(0%) scale(1) skew(5deg, 5deg)', offset: 0 }),
          style({ transform: 'translateX(-5%) scale(0.9) skew(10deg, 10deg)', offset: 0.05 }),
          style({ transform: 'translateX(-10%) scale(0.85) skew(10deg, 10deg)', offset: 0.1 }),
          style({ transform: 'translateX(-15%) scale(0.8) skew(10deg, 10deg)', offset: 0.15 }),
          style({ transform: 'translateX(-20%) scale(0.75) skew(10deg, 10deg)', offset: 0.2 }),
          style({ transform: 'translateX(-25%) scale(0.7) skew(10deg, 10deg)', offset: 0.25 }),
          style({ transform: 'translateX(-30%) scale(0.65) skew(10deg, 10deg)', offset: 0.3 }),
          style({ transform: 'translateX(-100%) scale(0) skew(10deg, 10deg)', offset: 1 }),
        ]))
      ], { optional: true })
    ])
  ])
]);
