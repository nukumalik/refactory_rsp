import * as types from './type'

export const login = ({ email, password }) => dispatch =>
  dispatch({ type: types.LOGIN, email, password })
