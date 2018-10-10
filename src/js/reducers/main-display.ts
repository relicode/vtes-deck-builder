import { MAIN_DISPLAY_CRYPT_CARD } from '../actions/types'
import { Action } from '../utils/interfaces/common'


interface MainDisplayAction extends Action {
  display: string;
}

const initialState = 'X-D'

export default function mainDisplayReducer(state = initialState, action: MainDisplayAction) {
  const { type } = action
  switch (type) {
    case MAIN_DISPLAY_CRYPT_CARD:
      return action.display
    default:
      return state
  }
}
