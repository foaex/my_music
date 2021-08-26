import React, { memo } from 'react'

import { getSizeImage } from '@/utils/format-utils'

import { AlbumWrapper } from './style'

export default memo(function AlbumCover (props) {

	const { info, height = "100px", width = "118px", bgp = "-570px" } = props;

	return (
		<AlbumWrapper height={height} width={width} bgp={bgp}>
			<div className="album-image">
				<img src={getSizeImage(info.picUrl, 100)} alt=""></img>
				<a href="/todo" className="cover sprite_cover">{info.name}</a>
			</div>
			<div className="ablum-info">
				<div className="name">
					<a href="todo">{info.name}</a>
				</div>
				<div className="artist">
					<a href="todo">{info.artist.name}</a>
				</div>
			</div>
		</AlbumWrapper>
	)
})
