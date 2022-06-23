import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "inspector";
import { Contact } from "../models/contact.model";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    contacts: builder.query<Contact[], void>({
      query: () => "/todos",
    }),
    contact: builder.query<Contact, number>({
      query: (id) => `/todos/${id}`,
    }),
    updateContact: builder.mutation<Contact, number>({
      query: (id) => ({
        url: `/todos/${id}`,
        method: "POST",
      }),
    }),
  }),
});
export const { useContactsQuery, useContactQuery, useUpdateContactMutation } =
  contactsApi;
