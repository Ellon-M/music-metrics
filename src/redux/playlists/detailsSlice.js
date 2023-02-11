import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPlaylistItems = createAsyncThunk(
  'charts/getPlaylistItems',
  async (values) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_ENDPOINT}/playlists/${values.playlistId}/tracks`,
        {
          headers: {
            Authorization: `Bearer ${values.token}`,
          },
        },
      );
      return res.data;
    } catch (err) {
      return err.message;
    }
  },
);

export const detailsSlice = createSlice({
  name: 'playlistInfo',
  initialState: {
    details: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPlaylistItems.fulfilled, (state, { payload }) => {
        if (state.details.length > 0) {
          state.details.splice(0, 1, payload);
        } else {
          state.details.push(payload);
        }
      });
  },
});

const { reducer } = detailsSlice;
export default reducer;
