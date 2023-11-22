import { configureStore } from '@reduxjs/toolkit';
import common from './slices/commonSlice';
import searches from './slices/searchesSlice'

const store = configureStore({
  reducer: {
    common,
    searches
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {common}
export type AppDispatch = typeof store.dispatch