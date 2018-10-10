import { CryptCard } from './cards'


export interface Action {
  type: string;
}

export interface State {
  cryptCards: CryptCard[];
  mainDisplay: string;
  filters: {
    crypt: {
      name: string;
    };
  };
}
