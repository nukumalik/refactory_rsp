import axios from 'axios'
import * as types from './type'

// Variables
const loading = (isLoading = true) => ({ type: types.LOADING, isLoading })

export const fetchData = () => dispatch => {
  dispatch(loading())
  axios
    .get(
      'https://raw.githubusercontent.com/cahyo-refactory/RSP-DataSet-SkilTest-FE/main/alumni-report.json'
    )
    .then(res => {
      const data = res.data.data
      dispatch({ type: types.FETCHING, data, message: '' })
      dispatch(loading(false))
    })
    .catch(err => {
      const message = err?.response?.data?.message || ''
      dispatch({ type: types.FETCHING, data: [], message })
      dispatch(loading(false))
    })
}

export const fetchDetail = () => dispatch => {
  dispatch(loading())
  axios
    .get(
      'https://raw.githubusercontent.com/cahyo-refactory/RSP-DataSet-SkilTest-FE/main/detail-course.json'
    )
    .then(res => {
      const detail = res.data.data
      dispatch({ type: types.FETCHING, detail, message: '' })
      dispatch(loading(false))
    })
    .catch(err => {
      const message = err?.response?.data?.message || ''
      dispatch({ type: types.FETCHING, detail: {}, message })
      dispatch(loading(false))
    })
}
