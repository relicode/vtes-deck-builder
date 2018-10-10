import initialState from '../../data/crypt-cards'
import { Action } from '../utils/interfaces/common'


export default function cryptCardsReducer(state = initialState, action: Action) {
  const { type } = action
  switch (type) {
    default:
      return state
  }
}

