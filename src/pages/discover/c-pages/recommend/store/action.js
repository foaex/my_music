import { CHANGE_TOP_BANNERS, CHANGE_HOT_RECOMMEND, CHANGE_NEW_ALBUMS, CHANGE_TOP_LIST, CHANGE_UP_LIST, CHANGE_NEW_LIST, CHANGE_ORIGIN_LIST } from './constants'


import { getTopBanner, getHotRecommend, getNewAlbums, getTopList, getRankingList } from '@/services/recommend'


// 保存轮播图数据
const changebanners = (res) => ({
	type: CHANGE_TOP_BANNERS,
	data: res.banners
})
// 保存热门推荐数据
const changeHotRecommendActions = res => ({
	type: CHANGE_HOT_RECOMMEND,
	data: res.result
})

// 保存新碟上架数据
const changeNewAlbumsActions = res => ({
	type: CHANGE_NEW_ALBUMS,
	data: res.albums
})

// 保存榜单所有数据
const changeAllTopListActions = res => ({
	type: CHANGE_TOP_LIST,
	data: res
})

// 保存三个排行榜的数据
// 飙升榜
const changeUpListActions = (res) => ({
	type: CHANGE_UP_LIST,
	data: res.playlist
})

// 新歌榜
const changeNewListActions = (res) => ({
	type: CHANGE_NEW_LIST,
	data: res.playlist
})

// 原创榜
const changeOriginListActions = (res) => ({
	type: CHANGE_ORIGIN_LIST,
	data: res.playlist
})

export const getTopBannersActions = () => {
	return (dispatch) => {
		getTopBanner().then(res => {
			dispatch(changebanners(res))
		})
	}
}

// 获取推荐歌单
export const getHotRecommendAction = (limit) => {
	return dispatch => {
		getHotRecommend(limit).then(res => {
			dispatch(changeHotRecommendActions(res))
		})
	}
}

// 获取新碟上架数据
export const getNewAlbumsAction = (limit) => {
	return dispatch => {
		getNewAlbums(limit).then(res => {
			dispatch(changeNewAlbumsActions(res))
		})
	}
}

// 获取所有榜单的数据
export const getAllTopListAction = () => {
	return dispatch => {
		getTopList().then(res => {
			dispatch(changeAllTopListActions(res))
		})
	}
}

// 获取飙升榜的数据
export const getTopListAction = (id) => {
	return dispatch => {
		getRankingList(id).then(res => {
			dispatch(changeUpListActions(res))
		})
	}
}

// 获取新歌榜的数据
export const getNewListAction = (id) => {
	return dispatch => {
		getRankingList(id).then(res => {
			dispatch(changeNewListActions(res))
		})
	}
}

// 获取原创榜的数据
export const getOriginListAction = (id) => {
	return dispatch => {
		getRankingList(id).then(res => {
			dispatch(changeOriginListActions(res))
		})
	}
}