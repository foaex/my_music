import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector,shallowEqual } from 'react-redux'

import ThemeHotRecommend from '@/components/theme-hot-recommend'
import TopRanking from '@/components/top-ranking'
import { getNewListAction, getOriginListAction, getTopListAction } from '../../store/action'

import { RankingWrapper } from './style'

export default memo(function RankList () {

	const { list } = useSelector(state => ({
		list: state.getIn(["recommend", "topList", "list"])
	}),shallowEqual)

	const state = useSelector((state) => ({
    topUpList: state.getIn(["recommend", "topUpList"]),
    topNewList: state.getIn(["recommend", "topNewList"]),
    topOriginList: state.getIn(["recommend", "topOriginList"])
  }), shallowEqual);

	const dispatch = useDispatch()

	useEffect(() => {
		if (list) {
			dispatch(getTopListAction(list[0].id))
			dispatch(getNewListAction(list[1].id))
			dispatch(getOriginListAction(list[2].id))
		}
	}, [dispatch, list])

	return (
		<RankingWrapper>
			<ThemeHotRecommend title="榜单"></ThemeHotRecommend>
				<div className="tops">
					<TopRanking info={state.topUpList} className="one"></TopRanking>
					<TopRanking info={state.topNewList} className="two"></TopRanking>
					<TopRanking info={state.topOriginList} className="three"></TopRanking>
				</div>
		</RankingWrapper>
	)
})
