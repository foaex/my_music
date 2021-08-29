import React, { memo } from 'react'

import { getSizeImage } from '@/utils/format-utils';

import { TopRankingWrapper } from './style'
import { useDispatch } from 'react-redux';
import { getCurrentSongAction } from '../../pages/play/store/action';

export default memo(function TopRanking (props) {

	const { info } = props
	const { tracks = [] } = info;

	const dispatch = useDispatch()
	const playMusic = (item) => {
		dispatch(getCurrentSongAction(item.id))
	}


	return (
		<TopRankingWrapper>
			<div className="header">
				<div className="image">
					<img src={getSizeImage(info.coverImgUrl)} alt="图片"></img>
				</div>
				<div className="info">
					<a href="#/">
						<h3>{info.name}</h3>
					</a>
					<div>
            <button className="btn play sprite_02" title="播放"></button>
            <button className="btn favor sprite_02" title="收藏"></button>
          </div>
				</div>
			</div>
			<div className="list">
				{
					tracks.slice(0,10).map((item,index) => {
						return (
							<div key={item.id} className="list-item">
								<div className="rank">{index + 1}</div>
								<div className="info">
									<a className="text-nowrap" href="/todo">{item.name}</a>
									<div className="operate">
                    <button className="btn sprite_02 play" onClick={e => playMusic(item)}></button>
                    <button className="btn sprite_icon2 addto"></button>
                    <button className="btn sprite_02 favor"></button>
                  </div>
								</div>
							</div>
						)
					})
				}
			</div>
			<div className="footer">
        <a href="/todo">查看全部 &gt;</a>
      </div>
		</TopRankingWrapper>
	)
})
