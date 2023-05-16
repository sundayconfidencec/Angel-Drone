// import { configureStore } from '@reduxjs/toolkit';
// import AuthReducer from "./reducers/AuthReducer"
// import thunk from 'redux-thunk';

// const Store = configureStore({
//     reducer: {
//       auth: AuthReducer,
//     },
//   });


// export default Store;




// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import AuthReducer from "./reducers/AuthReducer";
// import thunk from 'redux-thunk';

// const middleware = [...getDefaultMiddleware(), thunk];

// const store = configureStore({
//   reducer: {
//     auth: AuthReducer,
//   },
//   middleware: middleware,
// });

// export default store;


// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import AuthReducer from './reducers/AuthReducer';
// import thunk from 'redux-thunk';

// // Combine multiple reducers if needed
// const rootReducer = combineReducers({
//   auth: AuthReducer,
//   // Add other reducers here
// });

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;

// import {createStore, applyMiddleware} from 'redux';
// import AuthReducer from './reducers/AuthReducer';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import thunk from 'redux-thunk';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//     key: "root",
//     storage,
// }

// const persistedReducer = persistReducer(persistConfig, AuthReducer)

// let Store = createStore(persistedReducer, applyMiddleware(thunk))

// let persistor = persistStore(Store)

// export default {Store, persistor};


import { createStore, applyMiddleware } from 'redux';
import AuthReducer from './reducers/AuthReducer';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';

// Configuration for redux-persist
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, AuthReducer);

// Create the store with the persisted reducer and thunk middleware
const store = createStore(persistedReducer, applyMiddleware(thunk));

// Create the persistor for persisting the store
const persistor = persistStore(store);

export { store, persistor };
