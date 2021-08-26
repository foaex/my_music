import {
	CHANGE_TOP_BANNERS,CHANGE_HOT_RECOMMEND,CHANGE_NEW_ALBUMS
} from './constants'
import {Map} from 'immutable'

// 使用immutable 就能解决赋值问题 会返回一个新的对象
// 取值要使用get(属性名)方法

// 声明一个默认的值
const defaultState = Map({
	topBanners:[],
	hotRecommend:[],
	// 新碟上架数据
	newAlbums:[]
})

function reducer(state=defaultState,action) {
	const {type,data} = action
	switch (type) {
		case CHANGE_TOP_BANNERS:
			// 通过解构赋值还是有点性能问题
			// 通过set方法来修改immutable对象的中的值
			return state.set("topBanners",data)
		case CHANGE_HOT_RECOMMEND:
			return state.set("hotRecommend",data)
		case CHANGE_NEW_ALBUMS:
			return state.set("newAlbums",data)
		default:
			return state
	}
}
export default reducer
