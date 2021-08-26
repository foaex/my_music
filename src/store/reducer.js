import { combineReducers } from "redux-immutable";

// 引入reducer
import recommendReducer from '@/pages/discover/c-pages/recommend/store'

// 对所有的reducer进行合并
export default combineReducers({
	// 对recommendReducer进行取名为recommend
	recommend:recommendReducer,
})