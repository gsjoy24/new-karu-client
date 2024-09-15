import { configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import baseApi from './api/baseApi';
import authReducer from './features/authSlice';
import cartReducer from './features/cartSlice';

const persistConfig = {
	key: 'auth',
	storage
};

const persistCartConfig = {
	key: 'cart',
	storage
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedCartReducer = persistReducer(persistCartConfig, cartReducer);

export const store = configureStore({
	reducer: {
		[baseApi?.reducerPath]: baseApi?.reducer,
		auth: persistedAuthReducer,
		cart: persistedCartReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		}).concat(baseApi?.middleware)
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
