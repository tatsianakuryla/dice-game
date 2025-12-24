import { DICE_GAME_CONFIG } from '@/src/dice/dice.config';

export enum AlertMessages {
  NUMBER_HIGHER = 'NUMBER_HIGHER',
  NUMBER_LOWER = 'NUMBER_LOWER',
  NUMBER_EQUAL = 'NUMBER_EQUAL',
}

export const ALERT_MESSAGE_TEXT: Record<AlertMessages, string> = {
  [AlertMessages.NUMBER_HIGHER]: 'The number was higher',
  [AlertMessages.NUMBER_LOWER]: 'The number was lower',
  [AlertMessages.NUMBER_EQUAL]: 'The number was equal',
};

export const UI_CONSTANTS = {
  DEFAULT_THRESHOLD: 20,

  ALERT_TITLES: {
    WIN: 'You won',
    LOSE: 'You lost',
  },

  TABLE: {
    DATE_LOCALE: 'en-GB',
    COLORS: {
      WIN: '#1b5e20',
      LOSE: '#c62828',
    },
  },

  BUTTON_TEXT: {
    PLAY: 'PLAY',
  },

  SLIDER_MARKS: [
    { value: DICE_GAME_CONFIG.minimumValue },
    { value: 20 },
    { value: 40 },
    { value: 60 },
    { value: 80 },
    { value: DICE_GAME_CONFIG.maximumValue },
  ],
} as const;
