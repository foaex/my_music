import React, { memo, useEffect, useState, useCallback,useRef } from 'react'

import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getTopBannersActions } from '../../store/action'



import { Carousel } from 'antd';
import {
	BannerWrapper,
	BannerLeft,
	BannerRight,
	BannerControl
} from './style';

export default memo(function TopBanner () {

	// 创建引用对象
	const bannerRef = useRef()

	// 保存当前选中的索引
	const [currentIndex, setCurrentIndex] = useState(0)

	const bannerChange = useCallback((from, to) => {
		setCurrentIndex(to)
	},[])

	// 可以通过useSelector来取到store中的值 此处就是topBanners数据
	// useSelector是通过 === 来比较 所以会存在重复渲染 加一个参数 shallowEqual 就是使其只是浅层比较
	const { topBanners } = useSelector(state => ({
		// 由于reducer中使用了immutable 所以这里不能通过 . 来获取属性了
		// topBanners:state.recommend.topBanners
		// topBanners:state.get("recommend").get("topBanners") 这种写法和下面getIn()方法作用是一样的
		topBanners: state.getIn(["recommend", "topBanners"])
	}), shallowEqual)


	// 直接拿到dispatch 然后派发action就可以了
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getTopBannersActions())
	}, [dispatch])

	// 保存选中的图片
	const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20")

	return (
		<BannerWrapper bgImage={bgImage}>
			<div className="banner wrap-v2">
				<BannerLeft>
					<Carousel autoplay effect="fade" beforeChange={bannerChange} ref={bannerRef}>
						{
							topBanners.map((item) => {
								return (
									<a key={item.imageUrl} className="banner-item" href="todo">
										<img className="image" src={item.imageUrl} alt={item.typeTitle}></img>
									</a>
								)
							})
						}
					</Carousel>
				</BannerLeft>
				<BannerRight></BannerRight>
				<BannerControl>
					<button className="btn left" onClick={e => bannerRef.current.prev()}></button>
          <button className="btn right" onClick={e => bannerRef.current.next()}></button>
				</BannerControl>
			</div>
		</BannerWrapper>
	)
})
