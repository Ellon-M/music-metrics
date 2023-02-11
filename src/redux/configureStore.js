import { configureStore } from '@reduxjs/toolkit';
import playlistsReducer from './playlists/playlistsSlice';
import detailsReducer from './playlists/detailsSlice';

const store = configureStore({
  reducer: {
    playlists: playlistsReducer,
    details: detailsReducer,
  },
});

export default store;
