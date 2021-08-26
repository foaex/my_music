import {CHANGE_TOP_BANNERS,CHANGE_HOT_RECOMMEND,CHANGE_NEW_ALBUMS} from './constants'


import {getTopBanner,getHotRecommend,getNewAlbums} from '@/services/recommend'

const changebanners = (res) => ({
	type:CHANGE_TOP_BANNERS,
	data:res.banners
})

const changeHotRecommendActions = res => ({
	type:CHANGE_HOT_RECOMMEND,
	data:res.result
})

const changeNewAlbumsAction = res => ({
	type:CHANGE_NEW_ALBUMS,
	data:res.albums
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
		getHotRecommend(limit).then(res=>{
			dispatch(changeHotRecommendActions(res))
		})
	}
}

// 获取新碟上架数据
export const getNewAlbumsAction = (limit) => {
	return dispatch => {
		getNewAlbums(limit).then(res => {
			dispatch(changeNewAlbumsAction(res))
		})
	}
}