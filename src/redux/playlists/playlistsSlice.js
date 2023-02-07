import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const client = import.meta.env.VITE_CLIENT_ID;
const secret = import.meta.env.VITE_CLIENT_SECRET;

export const authenticate = createAsyncThunk(
  'auth/accesstoken',
  async () => {
    let authParams = {
      method: 'post',
      url: import.meta.env.VITE_AUTH_ENDPOINT,
      data: `grant_type=client_credentials&client_id=${client}&client_secret=${secret}`,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded'} 
    }
    const res = await axios(authParams);
    return res.data.access_token;
  }
)

export const getPlaylists = createAsyncThunk(
  'charts/getPlaylists',
  async (token) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_ENDPOINT}/browse/featured-playlists`,
        {
          headers: {
            'Authorization': `Bearer ${token}`
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

export const playlistsSlice = createSlice({
    name: 'charts',
    initialState: {
      token: "",
      playlists: []
    },
    extraReducers: (builder) => {
      builder
      .addCase(authenticate.fulfilled, (state, { payload }) => {
        payload ? state.token = payload : "";
      })
      .addCase(getPlaylists.fulfilled, (state, { payload }) => {
        payload ? state.playlists?.push(payload) : state.playlists?.push('');
      })
    }
})

const { reducer } = playlistsSlice;
export default reducer;
