import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { clearForm } from "./accountSlice";

export const apiSlice = createApi({
  reducerPath: "accounts",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SAMPLE_SERVICE_API_HOST,
    prepareHeaders: (headers, { getState }) => {
      const selector = apiSlice.endpoints.getToken.select();
      const { data: tokenData } = selector(getState());
      if (tokenData && tokenData.access_token) {
        headers.set("Authorization", `Bearer ${tokenData.access_token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Token", "Account", "Coasters", "Favorites"],

  endpoints: (builder) => ({
    login: builder.mutation({
      query: (info) => {
        let formData = null;
        if (info instanceof HTMLElement) {
          formData = new FormData(info);
        } else {
          formData = new FormData();
          formData.append("username", info.username);
          formData.append("password", info.password);
        }
        return {
          url: "/token",
          method: "post",
          body: formData,
          credentials: "include",
        };
      },
      providesTags: ["Account"],
      invalidatesTags: (result) => {
        return (result && ["Token"]) || [];
      },
    }),

    logout: builder.mutation({
      query: () => ({
        url: "/token",
        method: "delete",
        credentials: "include",
      }),
      invalidatesTags: ["Account", "Token"],
    }),

    getToken: builder.query({
      query: () => ({
        url: "/token",
        credentials: "include",
      }),
      providesTags: ["Token"],
    }),

    signUp: builder.mutation({
      query: (data) => ({
        url: "/accounts",
        method: "post",
        body: data,
        credentials: "include",
      }),
      providesTags: ["Account"],
      invalidatesTags: (result) => {
        return (result && ["Token"]) || [];
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(clearForm());
        } catch (err) {}
      },
    }),

    getRollercoaster: builder.query({
      query: () => ({
        url: "/api/coasters/all",
      }),
      providesTags: ["Coasters"],
    }),

    addFavorite: builder.mutation({
      query: (data) => {
        // const formData = new FormData(data);
        // formData.append("rollercoaster_id", data.rollercoaster_id);
        return {
          method: "post",
          url: "/favorites",
          body: data,
        };
      },
      invalidatesTags: ["Favorites"],
    }),

    getFavorites: builder.query({
      query: () => ({
        url: "/favorites",
        credentials: "include",
      }),
      providesTags: ["Favorites"],
    }),
  }),
});

// hooks that are used in components to make the api calls
export const {
  useLoginMutation,
  useLogoutMutation,
  useGetTokenQuery,
  useSignUpMutation,
  useGetRollercoasterQuery,
  useAddFavoriteMutation,
  useGetFavoritesQuery,
} = apiSlice;
