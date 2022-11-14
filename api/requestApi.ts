import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const requestApi = createApi({
  reducerPath: 'requestApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: ({ data }) => ({
        url: '/login',
        method: 'POST',
        body: data,
      }),
    }),
    signUp: builder.mutation({
      query: ({ data }) => ({
        url: '/members',
        method: 'POST',
        body: data,
      }),
    }),
    validateEmail: builder.mutation({
      query: ({ data }) => ({
        url: '/members/validation',
        method: 'POST',
        body: data,
      }),
    }),
    curationSurvey: builder.mutation({
      query: ({ data, accessToken }) => ({
        url: '/members/curation',
        method: 'POST',
        body: data,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),
    membersDetail: builder.mutation({
      query: ({ accessToken }) => ({
        url: '/members/detail',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),
    changePassword: builder.mutation({
      query: ({ data, accessToken }) => ({
        url: '/members/detail',
        method: 'PUT',
        body: data,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),
    confirmPassword: builder.mutation({
      query: ({ data, accessToken }) => ({
        url: '/members/confirm',
        method: 'POST',
        body: data,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),
    productsSearch: builder.mutation({
      query: (searchText) => ({
        url: `/products/search?keyword=${searchText}`,
        method: 'GET',
      }),
    }),
    logout: builder.mutation({
      query: ({ accessToken }) => ({
        url: '/logout',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),
    customRecommendUser: builder.mutation({
      query: ({ accessToken }) => ({
        url: encodeURI('/product-list/custom?page=0&sort='),
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),
    customRecommend: builder.mutation({
      query: () => ({
        url: encodeURI('/product-list/custom?page=0&sort='),
        method: 'GET',
      }),
    }),
    ageRecommend: builder.mutation({
      query: ({ ageValue }) => ({
        url: encodeURI(`/product-list/ages?category=${ageValue}&page=0&sort=`),
        method: 'GET',
      }),
    }),
    companionRecommend: builder.mutation({
      query: ({ companionValue }) => ({
        url: encodeURI(
          `/product-list/companion?category=${companionValue}&page=0&sort=`,
        ),
        method: 'GET',
      }),
    }),
    golfRecommend: builder.mutation({
      query: () => ({
        url: encodeURI('/product-list/themes?category=골프여행&page=0&sort='),
        method: 'GET',
      }),
    }),
    cultureRecommend: builder.mutation({
      query: () => ({
        url: encodeURI('/product-list/themes?category=문화탐방&page=0&sort='),
        method: 'GET',
      }),
    }),
    healingRecommend: builder.mutation({
      query: () => ({
        url: encodeURI(
          '/product-list/themes?category=리조트 휴양 및 힐링&page=0&sort=',
        ),
        method: 'GET',
      }),
    }),
  }),
})

export const {
  useSignInMutation,
  useSignUpMutation,
  useValidateEmailMutation,
  useCurationSurveyMutation,
  useMembersDetailMutation,
  useChangePasswordMutation,
  useConfirmPasswordMutation,
  useProductsSearchMutation,
  useLogoutMutation,
  useCustomRecommendUserMutation,
  useCustomRecommendMutation,
  useAgeRecommendMutation,
  useCompanionRecommendMutation,
  useGolfRecommendMutation,
  useCultureRecommendMutation,
  useHealingRecommendMutation,
} = requestApi
