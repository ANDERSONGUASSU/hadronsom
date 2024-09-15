// homeSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  texts: [],
  backgroundImage: "",
  title: "",
  description: "",
};

export const fetchHeroData = createAsyncThunk("home/fetchHeroData", async () => {
  const response = await fetch("/api/v1/hero/");
  const data = await response.json();
  return data;
});

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeroData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchHeroData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.texts = [
          action.payload.hero_text_1,
          action.payload.hero_text_2,
          action.payload.hero_text_3,
        ];
        state.backgroundImage = action.payload.hero_bg_img;
        state.title = action.payload.hero_title;
        state.description = action.payload.hero_description;
      })
      .addCase(fetchHeroData.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setIsLoading } = homeSlice.actions;

export default homeSlice.reducer;
