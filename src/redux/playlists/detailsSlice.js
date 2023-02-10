import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const client = import.meta.env.VITE_CLIENT_ID;
const secret = import.meta.env.VITE_CLIENT_SECRET;

export const getPlaylistItems = createAsyncThunk(
    'charts/getPlaylistItems',
    async (values) => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_ENDPOINT}/playlists/${values.playlistId}/tracks?limit=20`,
          {
            headers: {
              'Authorization': `Bearer ${values.token}`
            },
          }
        )
        return res.data;
      }
      catch(err) {
        return err.message;
      }
    }
)

export const detailsSlice = createSlice({
  name: 'playlistInfo',
  initialState: {
    details: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getPlaylistItems.fulfilled, (state, { payload }) => {
      payload ? state.details.push(payload) : {}
    })
  }
})

const { reducer } = detailsSlice;
export default reducer;