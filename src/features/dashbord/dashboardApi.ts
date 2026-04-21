import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dashbordApi = createApi({
  reducerPath: "dashboardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://task-api-eight-flax.vercel.app/api/",
  }),
  endpoints: (builder) => ({
    getDashbordData: builder.query<any, void>({
      query: () => "/dashboard",
    }),
  }),
});

export const { useGetDashbordDataQuery } = dashbordApi;
