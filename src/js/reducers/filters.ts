import { FILTERS_SET_CRYPT_BY_NAME } from '../actions/types'
import { Action } from '../utils/interfaces/common'


interface CryptFilterAction extends Action {
  name: string;
}

const initialState = {
  crypt: {
    name: '',
  }
}

export default function filterReducer(state = initialState, action: CryptFilterAction) {
  const { type } = action
  switch (type) {
    case FILTERS_SET_CRYPT_BY_NAME:
      return {
        ...state,
        crypt: {
          ...state.crypt,
          name: action.name,
        }
      }
    default:
      return state
  }
}

