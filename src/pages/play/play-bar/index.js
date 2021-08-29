import React, { memo, useState, useCallback, useEffect, useRef } from 'react'
import { Slider,message } from 'antd'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { PlaybarWrapper, Control, PlayInfo, Operator } from './style'
import { changeCurrentLyricIndexAction, changeLoopValueActions, getCurrentSongAction, playCurrentSongActions } from '../store/action';
import { getSizeImage, formatMinuteSecond } from '@/utils/format-utils'
import { getPlayUrl } from '@/utils/format-utils';


export default memo(function PlayBar () {

	const [isPlaying, setIsPlaying] = useState(false)
	// 记录歌曲播放时间
	const [currentTime, setCurrentTime] = useState(0)
	// 记录进度条的长度
	const [progress, setProgress] = useState(0)
	// 设置进度条是否在改变
	const [isChange, setisChange] = useState(false)



	const dispatch = useDispatch()
	const audioRef = useRef()

	// 获取store找那个的歌曲
	const { currentSong, playList, loopValue,currentLyricIndex,lyricList } = useSelector(state => ({
		currentSong: state.getIn(["play", "currentSong"]),
		playList: state.getIn(["play", "playList"]),
		loopValue: state.getIn(["play", "loopValue"]),
		currentLyricIndex:state.getIn(["play","currentLyricIndex"]),
		lyricList:state.getIn(["play","lyricList"])
	}), shallowEqual)

	// 获取要播放的歌曲信息
	useEffect(() => {
		dispatch(getCurrentSongAction(167876))
	}, [dispatch])

	// 获取歌曲信息
	useEffect(() => {
		// 拿到歌曲的播放路径 赋值给audio
		audioRef.current.src = getPlayUrl(currentSong.id);
		audioRef.current.play().then(res => {
			setIsPlaying(true);
		}).catch(err => {
			setIsPlaying(false);
		});
	}, [currentSong])

	// 获取歌曲总时长
	const totalTime = currentSong.dt || 0
	// 处理其他逻辑
	const picUrl = currentSong.al && currentSong.al.picUrl
	const singerName = (currentSong.ar && currentSong.ar[0].name) || '未知歌手'

	// 获取播放总列表长度
	const length = playList && playList.length


	// 点击按钮 播放歌曲
	const playMusic = useCallback(() => {
		isPlaying ? audioRef.current.pause() : audioRef.current.play()
		setIsPlaying(!isPlaying)
	}, [isPlaying])

	// 获取播放的时间
	const timeUpdate = (e) => {
		const runTime = e.target.currentTime * 1000
		// 如果不是在手动修改进度条 就让其自己增加
		if (!isChange) {
			setCurrentTime(runTime)
			setProgress(currentTime / totalTime * 100)
		}

		// 拿到歌词索引
		let i = 0;
		for(;i<lyricList.length;i++){
			const lyrTime = lyricList[i].time
			if(runTime < lyrTime){
				break;
			}
		}
		const findIndex = i - 1
		if(currentLyricIndex !== findIndex){
			const content = lyricList[findIndex] && lyricList[findIndex].content
			dispatch(changeCurrentLyricIndexAction(findIndex))
			if(isPlaying){
				message.open({
					content: content,
					key: "lyric",
					duration: 0,
					className: 'lyric-class',
				})
			}
		}
	}

	// 单曲播放完毕
	const timeOut = () => {
		if (loopValue === 2) {
			audioRef.current.currentTime = 0
			audioRef.current.play()
		} else {
			dispatch(playCurrentSongActions(1))
		}
	}

	// 拖动进度条时
	const sliderChange = useCallback((e) => {
		setisChange(true)
		setProgress(e)
		const changeValue = e / 100.0 * totalTime
		setCurrentTime(changeValue)
	}, [totalTime])

	// 进度条改变后
	const sliderAfterChange = useCallback((e) => {
		setisChange(false)
		const changeValue = e / 100.0 * totalTime
		audioRef.current.currentTime = changeValue / 1000
		setCurrentTime(changeValue)

		if (!isPlaying) {
			playMusic()
		}
	}, [totalTime, isPlaying, playMusic])

	return (
		<PlaybarWrapper className="sprite_player">
			<div className="content wrap-v2">
				<Control isPlaying={isPlaying}>
					<button className="prev sprite_player btn" onClick={e => dispatch(playCurrentSongActions(-1))}></button>
					<button className="play sprite_player btn" onClick={e => playMusic()}></button>
					<button className="next sprite_player btn" onClick={e => dispatch(playCurrentSongActions(1))}></button>
				</Control>
				<PlayInfo>
					<div className="image sprite_player">
						<img src={getSizeImage(picUrl, 34)} alt="" />
						<div className="cover sprite_player"></div>
					</div>
					<div className="info">
						<div className="song">
							<a className="song-name" href="/todo">{currentSong.name}</a>
							<a className="singer-name" href="/todo">{singerName}</a>
						</div>
						<div className="progress">
							<Slider tooltipVisible={false} value={progress} onChange={sliderChange} onAfterChange={sliderAfterChange} />
							<div className="time">
								<span className="now-time">{formatMinuteSecond(currentTime)}</span>
								<span className="divider">/</span>
								<span className="total-time">{formatMinuteSecond(totalTime)}</span>
							</div>
						</div>
					</div>
				</PlayInfo>
				<Operator loopValue={loopValue}>
					<div className="left">
						<button className="sprite_player btn favor"></button>
						<button className="sprite_player btn share"></button>
					</div>
					<div className="right sprite_player">
						<button className="sprite_player btn volume"></button>
						<button className="sprite_player btn loop" onClick={e => dispatch(changeLoopValueActions(loopValue + 1))}></button>
						<button className="sprite_player btn playlist"
						>
							{length}
						</button>
					</div>
				</Operator>
			</div>
			<audio ref={audioRef} onTimeUpdate={timeUpdate} onEnded={e => timeOut()}></audio>
		</PlaybarWrapper>
	)
})
