import { createSlice } from "@reduxjs/toolkit";
//import { createContext } from "react";

const initialState = {
  show: null,
  username: "",
  password: "",
  email: "",
  first_name: "",
  last_name: "",
};

//export const Context = createContext(initialState) //added this line

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    updateField: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
    showModal: (state, action) => {
      state.show = action.payload;
    },
    clearForm: () => {
      return initialState;
    },
  },
}, ); //added initialstate

export const { clearForm, updateField, showModal } = accountSlice.actions;

export const LOG_IN_MODAL = "LOG_IN_MODAL";
export const SIGN_UP_MODAL = "SIGN_UP_MODAL";
