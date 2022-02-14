import { trigger, animate, transition, style, state } from '@angular/animations';

export const enterTransformFromLeft = trigger('enterTransformFromLeft', [
  transition(':enter', [
    style({
      transform: 'translateX(-100%)'
    }), animate(500, style({
      transform: 'translateX(0)'
    }))
  ])
])

export const enterTransformFromRight = trigger('enterTransformFromRight', [
  transition(':enter', [
    style({
      transform: 'translateX(100%)'
    }), animate(500, style({
      transform: 'translateX(0)'
    }))
  ])
])
export const enterTransformFromUp = trigger('enterTransformFromUp', [
  transition(':enter', [
    style({
      transform: 'translateY(-100%)'
    }), animate(500, style({
      transform: 'translateY(0)'
    }))
  ])
])
export const leaveTransformToLeft = trigger('leaveTransformToLeft', [
  transition(':leave', [
    style({
      transform: 'translateX(0)'
    }), animate(500, style({
      transform: 'translateX(-100%)'
    }))
  ])
])

export const leaveTransformToRight = trigger('leaveTransformToRight', [
  transition(':leave', [
    style({
      transform: 'translateX(0)'
    }), animate(500, style({
      transform: 'translateX(100%)'
    }))
  ])
])
export const leaveTransformToUp = trigger('leaveTransformToUp', [
  transition(':leave', [
    style({
      transform: 'translateY(0)'
    }), animate(500, style({
      transform: 'translateY(-100%)'
    }))
  ])
])


export const bottomSlide = trigger('bottomSlide', [
  state('left', style({
    transform: 'translateX(-100%)',
    width: '100%'
  })),
  state('invision', style({
    transform: 'translateX(0)',
    width: '100%',
  })),
  state('right', style({
    transform: 'translateX(100%)',
    width: '100%'
  })),
  state('left-absolute', style({
    transform: 'translateX(-100%)',
    position: 'absolute',
    width: '100%'
  })),
  state('invision-absolute', style({
    transform: 'translateX(0)',
    position: 'absolute',
    width: '100%'

  })),
  state('right-absolute', style({
    transform: 'translateX(100%)',
    position: 'absolute',
    width: '100%'
  })),
  transition('left <=> invision', animate(500)),
  transition('right <=> invision', animate(500)),
  transition('invision-absolute <=> left-absolute', animate(500)),
  transition('invision-absolute <=> right-absolute', animate(500))
])

export const curtainTop = trigger('curtainTop', [
  transition(':enter', [
    style({
      transform: 'translateX(-100%)'
    }), animate(500, style({
      transform: 'translateY(0)'
    }))
  ])
])
export const curtainBottom = trigger('curtainBottom', [
  transition(':enter', [
    style({
      transform: 'translateX(100%)',
    }), animate(500, style({
      transform: 'translateY(0)'
    }))
  ])
])
