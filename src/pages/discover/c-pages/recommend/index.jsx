import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
// import {getTopBannersActions} from './store/action'
//引入connect用于连接UI组件与redux
// import {connect} from 'react-redux'
import { RecommendWrapper, Content, RecommendLeft, RecommendRight } from './style'

import TopBanner from './c-cpns/top-banners'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import RankingList from './c-cpns/ranking-list'
import { getAllTopListAction } from './store/action'
import UserLogin from './c-cpns/user-login'

function Recommend () {

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getAllTopListAction())
	}, [dispatch])

	return (
		<RecommendWrapper>
			<TopBanner></TopBanner>
			<Content className="wrap-v2">
				<RecommendLeft>
					<HotRecommend></HotRecommend>
					<NewAlbum></NewAlbum>
					<RankingList></RankingList>
				</RecommendLeft>
				<RecommendRight>
					<UserLogin></UserLogin>
				</RecommendRight>
			</Content>
		</RecommendWrapper>
	)
}

export default memo(Recommend)


// function Recommend(props) {
// 	const {getTopBannersActions} = props
// 	useEffect(() => {
// 		getTopBannersActions()
// 	}, [getTopBannersActions])


// 	return (
// 		<div>
// 			<h2>Recommend:</h2>
// 		</div>
// 	)
// }

// export default connect(
// 	state => ({
// 		topBanners:state.recommend.topBanners
// 	}),
// 	{
// 		getTopBannersActions
// 	}
// )(Recommend)
