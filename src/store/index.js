import {applyMiddleware, createStore,compose} from "redux";
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import reducer from "./redux"

// 配置持久化插件（blacklist和whitelist二选一，不要同时配置；都不配置，默认所有数据都持久化）
const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['list'], // 黑名单
  whitelist: [] // 白名单
}

// 持久化处理
const persistedReducer = persistReducer(persistConfig, reducer)

//使用redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(persistedReducer,composeEnhancers(applyMiddleware(thunk)));//安装了中间件，改装了redux 增强到浏览器
persistStore(store);


export default store