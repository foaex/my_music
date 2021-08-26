import React, { memo, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { RecommendWrapper } from './style'
import ThemeHotRecommend from '@/components/theme-hot-recommend'
import ThemeCover from '@/components/theme-cover'
import { getHotRecommendAction } from '../../store/action'

export default memo(function HotRecommend () {

	// 获取推荐歌单数据
	const { hotRecommend } = useSelector(state => ({
		hotRecommend: state.getIn(["recommend", "hotRecommend"])
	}))

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getHotRecommendAction(8))
	}, [dispatch])


	return (
		<RecommendWrapper>
			<ThemeHotRecommend title="热门推荐" keywords={["华语", "流行", "摇滚", "民谣", "电子"]}></ThemeHotRecommend>
			<div className="recommend-list">
				{
					hotRecommend.map((item, index) => {
						return (
							<ThemeCover key={index} info={item}></ThemeCover>
						)
					})
				}
			</div>
		</RecommendWrapper>
	)
})
