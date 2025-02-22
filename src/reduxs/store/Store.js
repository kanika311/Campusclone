import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { rootReducer } from './rootReducer';
import storage from 'redux-persist/lib/storage';

// Redux Persist Configuration
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // Persist only specific reducers
};

// Create Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// ✅ Correct middleware setup (thunk is included by default)
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Ignore non-serializable checks from Redux Persist
    }), // No need to manually add thunk
});

// Create Persistor
export const persistor = persistStore(store);

// Export Store
export default store;

