import React, { memo } from 'react'
import { ThemeCoverWrapper } from './style'

import { getCount, getSizeImage } from '@/utils/format-utils'

export default memo(function ThemeCover (props) {

	const { info } = props

	return (
		<ThemeCoverWrapper>
			<div className="cover-top">
				<img src={getSizeImage(info.picUrl || info.coverImgUrl, 140)} alt=""></img>
				<div className="cover sprite_cover">
					<div className="info sprite_cover">
						<span>
							<i className="sprite_icon erji">
							</i>
							{getCount(info.playCount)}
						</span>
						<i className="sprite_icon play"></i>
					</div>
				</div>
			</div>
			<a className="cover-bottom" href="todo">{info.name}</a>
		</ThemeCoverWrapper>
	)
})
