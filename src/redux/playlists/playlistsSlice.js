import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const client = import.meta.env.VITE_CLIENT_ID;
const secret = import.meta.env.VITE_CLIENT_SECRET;

export const authenticate = createAsyncThunk(
  'auth/accesstoken',
  async () => {
    const authParams = {
      method: 'post',
      url: import.meta.env.VITE_AUTH_ENDPOINT,
      data: `grant_type=client_credentials&client_id=${client}&client_secret=${secret}`,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    };
    const res = await axios(authParams);
    return res.data.access_token;
  },
);

export const getPlaylists = createAsyncThunk(
  'charts/getPlaylists',
  async (token) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_ENDPOINT}/browse/featured-playlists?country=US&limit=20`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return res.data;
    } catch (err) {
      return err.message;
    }
  },
);

export const playlistsSlice = createSlice({
  name: 'playlists',
  initialState: {
    token: '',
    playlists: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticate.fulfilled, (state, { payload }) => {
        /* eslint-disable no-param-reassign */
        state.token = payload;
      })
      .addCase(getPlaylists.fulfilled, (state, { payload }) => {
        state.playlists.push(payload);
      });
  },
});

const { reducer } = playlistsSlice;
export default reducer;
