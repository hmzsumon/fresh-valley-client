import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
	newProductReducer,
	productsReducer,
	adminProductsReducer,
	productDeletesReducer,
} from './productReducer';
import { loadUserReducer, profileReducer, userReducer } from './userReducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['user'],
};

const rootReducer = combineReducers({
	newProduct: newProductReducer,
	products: productsReducer,
	deleteProduct: productDeletesReducer,
	profile: profileReducer,
	user: userReducer,
	loadUser: loadUserReducer,
	adminProducts: adminProductsReducer,
});

export default persistReducer(persistConfig, rootReducer);
