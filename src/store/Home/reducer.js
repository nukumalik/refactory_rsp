import * as types from './type'

const initState = {
  message: '',
  partner: [],
  seeOn: [],
}

export default (state = initState, action) => {
  const { partner, seeOn, message, type } = action

  switch (type) {
    case types.FETCHING_PARTNER:
      return { ...state, partner, message }
    case types.FETCHING_SEE_ON:
      return { ...state, seeOn, message }
    default:
      return state
  }
}
