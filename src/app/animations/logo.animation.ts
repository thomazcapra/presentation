import {
  trigger,
  style,
  animate,
  transition,
  state,
  AnimationTriggerMetadata
} from '@angular/animations';

export const animationStateList: string[] = ['shown', 'scaleIn', 'scaleOut'];

export const logoAnimation: AnimationTriggerMetadata = trigger(
  'logoAnimation',
  [
    state('void', style({ opacity: 0 })),
    state('shown', style({ opacity: 1 })),
    state('scaleIn', style({ transform: 'scale(1.2)' })),
    state('scaleOut', style({ transform: 'scale(1)' })),

    transition('* => shown', [animate('200ms ease-in', style({ opacity: 1 }))]),
    transition('shown => scaleIn', [
      animate('500ms ease-in', style({ transform: 'scale(1.2)' }))
    ]),
    transition('scaleIn => scaleOut', [
      animate('500ms ease-out', style({ transform: 'scale(1)' }))
    ]),
    transition('* => hidden', [
      animate('200ms ease-out', style({ opacity: 0 }))
    ])
  ]
);
