import React, { memo, useEffect, useState } from 'react'

import ThemeHotRecommend from '@/components/theme-hot-recommend'
import { getTopList, getRankingList } from '@/services/recommend'

export default memo(function RankList () {

	// 获取前三个榜单的数据
	const [topThree, setTopThree] = useState([])

	useEffect(() => {
		getTopList().then(res => {
			const data = res.list.slice(0, 3)
			setTopThree(data)
		})
	},[topThree])


	// useEffect(() => {
	// 	getRankingList(getId(topThree)).then(res => {
	// 		console.log(res);
	// 	})
	// },[])

	return (
		<div>
			<ThemeHotRecommend title="榜单"></ThemeHotRecommend>
		</div>
	)
})
