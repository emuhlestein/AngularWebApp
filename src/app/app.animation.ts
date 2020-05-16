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

export const slideInAnimation9 = trigger('slideInAnimation', [
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


export const slideInAnimation88 = trigger('slideInAnimation', [
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



export const slideInAnimation99 = trigger('slideInAnimation', [
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


export const slideInAnimation2 = trigger('slideInAnimation', [
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
          style({ transform: 'translateX(-35%) scale(0.60) skew(10deg, 10deg)', offset: 0.35 }),
          style({ transform: 'translateX(-40%) scale(0.50) skew(10deg, 10deg)', offset: 0.4 }),
          style({ transform: 'translateX(-45%) scale(0.55) skew(10deg, 10deg)', offset: 0.45 }),
          style({ transform: 'translateX(-50%) scale(0.50) skew(10deg, 10deg)', offset: 0.50 }),
          style({ transform: 'translateX(-55%) scale(0.45) skew(10deg, 10deg)', offset: 0.55 }),
          style({ transform: 'translateX(-60%) scale(0.40) skew(10deg, 10deg)', offset: 0.6 }),
          style({ transform: 'translateX(-65%) scale(0.35) skew(10deg, 10deg)', offset: 0.65 }),
          style({ transform: 'translateX(-70%) scale(0.30) skew(10deg, 10deg)', offset: 0.70 }),
          style({ transform: 'translateX(-75%) scale(0.25) skew(10deg, 10deg)', offset: 0.75 }),
          style({ transform: 'translateX(-80%) scale(0.20) skew(10deg, 10deg)', offset: 0.80 }),
          style({ transform: 'translateX(-85%) scale(0.15) skew(10deg, 10deg)', offset: 0.85 }),
          style({ transform: 'translateX(-90%) scale(0.10) skew(10deg, 10deg)', offset: 0.90 }),
          style({ transform: 'translateX(-95%) scale(0.5) skew(10deg, 10deg)', offset: 0.95 }),
          style({ transform: 'translateX(-100%) scale(0) skew(10deg, 10deg)', offset: 1 }),
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

