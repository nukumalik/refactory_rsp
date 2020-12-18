import * as types from './type'

const initState = {
  message: '',
  email: '',
  password: '',
}

export default (state = initState, action) => {
  const { email, password, message, type } = action

  switch (type) {
    case types.LOGIN:
      return { ...state, email, password, message }
    default:
      return state
  }
}
