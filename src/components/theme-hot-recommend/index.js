import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { HeaderWrapper } from './style'

const ThemeHotRecommend = memo(function ThemeHotRecommend (props) {

		// keywords不是每一标题都有 所以给一个默认值
		// 同时也可以使用propType
	const { title, keywords=[] } = props

	return (
		<HeaderWrapper className="sprite_02">
			<div className="left">
				<h3 className="title">{title}</h3>
				<div className="keyword">
					{
						keywords.map((item, index) => {
							if(index < 4){
								return (
									<div className="item" key={index}>
										<a href="todo">{item}</a>
										<span className="divider">|</span>
									</div>
								)
							}else{
								return (
									<div className="item" key={index}>
										<a href="todo">{item}</a>
										<span></span>
									</div>
								)
							}
						})
					}
				</div>
			</div>
			<div className="right">
				<a href="todo">更多</a>
				<i className="icon sprite_02"></i>
			</div>
		</HeaderWrapper>
	)
})

ThemeHotRecommend.propTypes = {
	title:PropTypes.string.isRequired,
	keywords:PropTypes.array
}
ThemeHotRecommend.defaultProps = {
	keywords:[]
}

export default ThemeHotRecommend
