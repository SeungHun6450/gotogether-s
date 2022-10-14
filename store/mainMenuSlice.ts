import { createSlice } from '@reduxjs/toolkit'

type mainMenuState = {
  label: string
  link: string
}[]

const mainMenuSlice: mainMenuState = createSlice({
  name: 'mainMenuSlice',
  initialState: [
    {
      label: '내 정보',
      link: '/myinfo',
    },
    {
      label: '주문/예약 확인 및 취소',
      link: '/mybooking',
    },
    {
      label: '여행지 추천 받기',
      link: '/survey',
    },
  ],
  reducers: {},
})

export default mainMenuSlice
