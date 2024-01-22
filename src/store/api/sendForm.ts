import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthFormType } from 'types';

export const formApi = createApi({
  reducerPath: 'formApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    sendAuthForm: builder.mutation<AuthFormType, any>({
      query: (body) => ({
        url: 'frontend',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useSendAuthFormMutation } = formApi;
