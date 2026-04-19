import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dashbordApi = createApi({
  reducerPath: "dasbordApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://task-api-eight-flax.vercel.app/api/",
  }),
  endpoints: (builder) => ({
    getDashbordData: builder.query({
      query: () => "/dashboard",
    }),
  }),
});

export const { useGetDashbordDataQuery } = dashbordApi;
