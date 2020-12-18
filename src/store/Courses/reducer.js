import * as types from './type'

const initState = {
  data: [],
  list: [
    {
      id: 1,
      photo_url:
        'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/CTT7UaWkTcmvZwIk1tp7',
      title: 'HTML & CSS',
      short_description:
        'Mempelajari bahasa pemrograman HTML & CSS sebagai dasar dalam pengembangan web',
      link_url: 'https://course.refactory.id/p/html-css-introduction',
      user: {
        user_id: 1,
        photo_url:
          'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:30,height:30/https://www.filepicker.io/api/file/KI6yume5Q6Cav3jEJBGi',
        name: 'Harlita Keni Damonti',
      },
    },
    {
      id: 1,
      photo_url:
        'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/CTT7UaWkTcmvZwIk1tp7',
      title: 'HTML & CSS',
      short_description:
        'Mempelajari bahasa pemrograman HTML & CSS sebagai dasar dalam pengembangan web',
      link_url: 'https://course.refactory.id/p/html-css-introduction',
      user: {
        user_id: 1,
        photo_url:
          'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:30,height:30/https://www.filepicker.io/api/file/KI6yume5Q6Cav3jEJBGi',
        name: 'Harlita Keni Damonti',
      },
    },
    {
      id: 1,
      photo_url:
        'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/CTT7UaWkTcmvZwIk1tp7',
      title: 'HTML & CSS',
      short_description:
        'Mempelajari bahasa pemrograman HTML & CSS sebagai dasar dalam pengembangan web',
      link_url: 'https://course.refactory.id/p/html-css-introduction',
      user: {
        user_id: 1,
        photo_url:
          'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:30,height:30/https://www.filepicker.io/api/file/KI6yume5Q6Cav3jEJBGi',
        name: 'Harlita Keni Damonti',
      },
    },
    {
      id: 1,
      photo_url:
        'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/CTT7UaWkTcmvZwIk1tp7',
      title: 'HTML & CSS',
      short_description:
        'Mempelajari bahasa pemrograman HTML & CSS sebagai dasar dalam pengembangan web',
      link_url: 'https://course.refactory.id/p/html-css-introduction',
      user: {
        user_id: 1,
        photo_url:
          'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:30,height:30/https://www.filepicker.io/api/file/KI6yume5Q6Cav3jEJBGi',
        name: 'Harlita Keni Damonti',
      },
    },
  ],
  detail: {},
  isLoading: false,
  message: '',
}

export default (state = initState, action) => {
  const { data, detail, isLoading, message, type } = action

  switch (type) {
    case types.FETCHING:
      return { ...state, data, message }
    case types.FETCHING_DETAIL:
      return { ...state, detail, message }
    case types.LOADING:
      return { ...state, isLoading }
    default:
      return state
  }
}
