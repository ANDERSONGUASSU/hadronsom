//frontend/src/features/contactSlice.js
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  companyData: null,
  isLoading: true,
  error: null,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    getCompanyDataStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    getCompanyDataSuccess(state, action) {
      state.isLoading = false;
      state.companyData = action.payload;
    },
    getCompanyDataFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getCompanyDataStart, getCompanyDataSuccess, getCompanyDataFailure } =
  contactSlice.actions;

export const fetchCompanyData = () => async (dispatch) => {
  dispatch(getCompanyDataStart());

  try {
    const response = await axios.get("/api/v1/company-profile/");
    dispatch(getCompanyDataSuccess(response.data));
  } catch (error) {
    dispatch(getCompanyDataFailure(error.message));
  }
};

export default contactSlice.reducer;
