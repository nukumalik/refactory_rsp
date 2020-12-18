import axios from 'axios'
import * as types from './type'

export const fetchPartner = () => dispatch => {
  axios
    .get(
      'https://raw.githubusercontent.com/cahyo-refactory/RSP-DataSet-SkilTest-FE/main/partner.json'
    )
    .then(res => {
      const partner = res.data.data
      dispatch({ type: types.FETCHING_PARTNER, partner, message: '' })
    })
    .catch(err => {
      const message = err?.response?.data?.message || ''
      dispatch({ type: types.FETCHING_SEE_ON, partner: [], message })
    })
}

export const fetchSeeOn = () => dispatch => {
  axios
    .get(
      'https://raw.githubusercontent.com/cahyo-refactory/RSP-DataSet-SkilTest-FE/main/seen_on.json'
    )
    .then(res => {
      const seeOn = res.data.data
      dispatch({ type: types.FETCHING_SEE_ON, seeOn, message: '' })
    })
    .catch(err => {
      const message = err?.response?.data?.message || ''
      dispatch({ type: types.FETCHING_SEE_ON, seeOn: [], message })
    })
}
