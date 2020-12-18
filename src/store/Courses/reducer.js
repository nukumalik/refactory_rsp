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
  detail: {
    id: 1,
    'short-description':
      'Hai Refactorian, pada course ini kita akan belajar mengenal apa itu HTML dan CSS, mengenal dasar-dasarnya, mengetahui bagaimana cara menggunakannya dan lain-lain. simak videonya dan jangan lupa untuk praktikan.',
    quistion: 'Alasan Mempelajari HTML dan CSS',
    answer:
      'Setiap web developer harus memiliki pengetahuan dasar setidaknya HTML dan CSS, dari mempelajari HTML dan CSS dalam course ini harapannya peserta akan lebih paham bagaimana konsep dasar pengembangan website.',
    'quistion-photo': 'https://cdn.fs.teachablecdn.com/KeagvIv6QC6TQCzyKzrL',
    'materi course': [
      {
        id: 1,
        section: 'HTML Dasar',
        data: [
          {
            id: 1,
            title: 'Pengenalan HTML',
            url: 'https://course.refactory.id/p/html-css-introduction',
            'time-in': '5:45',
          },
          {
            id: 1,
            title: 'Pengenalan HTML',
            url: 'https://course.refactory.id/p/html-css-introduction',
            'time-in': '5:45',
          },
          {
            id: 1,
            title: 'Pengenalan HTML',
            url: 'https://course.refactory.id/p/html-css-introduction',
            'time-in': '5:45',
          },
        ],
      },
      {
        id: 1,
        section: 'HTML Dasar',
        data: [
          {
            id: 1,
            title: 'Pengenalan HTML',
            url: 'https://course.refactory.id/p/html-css-introduction',
            'time-in': '5:45',
          },
          {
            id: 1,
            title: 'Pengenalan HTML',
            url: 'https://course.refactory.id/p/html-css-introduction',
            'time-in': '5:45',
          },
          {
            id: 1,
            title: 'Pengenalan HTML',
            url: 'https://course.refactory.id/p/html-css-introduction',
            'time-in': '5:45',
          },
        ],
      },
      {
        id: 1,
        section: 'HTML Dasar',
        data: [
          {
            id: 1,
            title: 'Pengenalan HTML',
            url: 'https://course.refactory.id/p/html-css-introduction',
            'time-in': '5:45',
          },
          {
            id: 1,
            title: 'Pengenalan HTML',
            url: 'https://course.refactory.id/p/html-css-introduction',
            'time-in': '5:45',
          },
          {
            id: 1,
            title: 'Pengenalan HTML',
            url: 'https://course.refactory.id/p/html-css-introduction',
            'time-in': '5:45',
          },
        ],
      },
    ],
  },
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
