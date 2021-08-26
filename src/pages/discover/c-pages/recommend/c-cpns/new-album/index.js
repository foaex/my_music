import React, { memo, useEffect, useRef } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { Carousel } from 'antd'

import ThemeHotRecommend from '@/components/theme-hot-recommend'
import AlbumCover from '@/components/album-cover'
import { getNewAlbumsAction } from '../../store/action'

import { AlbumWrapper } from './style'

export default memo(function NewAlbum () {

	const newAlbumRef = useRef()

	const { newAlbums } = useSelector(state => ({
		newAlbums: state.getIn(["recommend", "newAlbums"])
	}), shallowEqual)

	const dispatch = useDispatch()
	// 发送请求 获取数据
	useEffect(() => {
		dispatch(getNewAlbumsAction(10))
	}, [dispatch])

	return (
		<AlbumWrapper>
			<ThemeHotRecommend title="新碟上架"></ThemeHotRecommend>
			<div className="content">
				<div className="arrow arrow-left sprite_02" onClick={e => newAlbumRef.current.prev()}></div>
				<div className="album">
					<Carousel dots={false} ref={newAlbumRef}>
						{
							[0, 1].map(item => {
								return (
									<div key={item} className="page">
										{
											newAlbums.slice(item * 5, (item + 1) * 5).map(iten => {
												return (
													<AlbumCover key={iten.id} info={iten}/>
												)
											})
										}
									</div>
								)
							})
						}
					</Carousel>
				</div>
				<div className="arrow arrow-right sprite_02" onClick={e => newAlbumRef.current.next()}></div>
			</div>
		</AlbumWrapper>
	)
})
