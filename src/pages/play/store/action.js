import { getSongDetail } from "@/services/play";
import { getLyrics } from "../../../services/play";
import { paresLyric } from "../../../utils/lyric-parse";
import { CHANGE_CURRENT_LYRIC_INDEX, CHANGE_CURRENT_SONG, CHANGE_CURRENT_SONG_INDEX, CHANGE_LOOP_VALUE, CHANGE_LYRIC_LIST, CHANGE_PLAY_LIST } from "./constant";

// 保存歌曲信息action
const changeCurrentSongActions = currentSong => ({
	type: CHANGE_CURRENT_SONG,
	data: currentSong
})

// 保存播放列表数据
const changePlayListActions = (list) => ({
	type: CHANGE_PLAY_LIST,
	data: list
})

// 保存当前播放歌曲的索引
const changeCurrentSongIndexActions = (index) => ({
	type: CHANGE_CURRENT_SONG_INDEX,
	data: index
})

// 保存当前播放歌曲的歌词
const changeLyricsAction = (lyricList) => ({
	type:CHANGE_LYRIC_LIST,
	data:lyricList
})

// 保存循环方式
export const changeLoopValueActions = (value) => {
	if(value > 2) {
		value = 0
	}
	return {
		type:CHANGE_LOOP_VALUE,
		data:value
	}
}

// 获取当前歌曲信息
export const getCurrentSongAction = (ids) => {
	return (dispatch, getState) => {
		// 获取当前播放列表
		const playList = getState().getIn(["play", "playList"]);
		// 在当前列表查找歌曲 找到返回索引 没有找到返回 -1
		let currentIndex = playList.findIndex(item => item.id === ids)
		if (currentIndex !== -1) { //找到了
			const currentSong = playList[currentIndex];
			dispatch(changeCurrentSongIndexActions(currentIndex))
			dispatch(changeCurrentSongActions(currentSong))
		} else { //没有找到
			getSongDetail(ids).then(res => {
				const song = res.songs && res.songs[0];
				if (!song) return
				// 添加到播放列表
				const newList = [...playList,song]
				dispatch(changePlayListActions(newList))
				// 改变当前播放索引
				dispatch(changeCurrentSongIndexActions(newList.length - 1))
				dispatch(changeCurrentSongActions(song))
			})
		}
		getLyrics(ids).then(res => {
			// 拿到所有歌词
			const lyrics = res.lrc && res.lrc.lyric
			// 拿到解析后的歌词
			const lyricList = paresLyric(lyrics)
			dispatch(changeLyricsAction(lyricList))
		})
	}
}

// 判断播放方式
export const playCurrentSongActions = (tag) => {
	return (dispatch,getState) => {
		// 1.获取当前的index
    let currentSongIndex = getState().getIn(["play", "currentSongIndex"]);
    const loopValue = getState().getIn(["play", "loopValue"]);
    const playList = getState().getIn(["play", "playList"]);

		// 2.判断当前播放列表
    switch (loopValue) {
      case 1:
				let currentIndex = Math.floor(Math.random() * playList.length);
				while(currentIndex === currentSongIndex){
					currentIndex = Math.floor(Math.random() * playList.length);
				}
        currentSongIndex = currentIndex;
        break;
      default:
        currentSongIndex += tag;
        if (currentSongIndex === playList.length) currentSongIndex = 0; 
        if (currentSongIndex === -1) currentSongIndex = playList.length - 1;
    }
		// 3.处理修改数据
    const currentSong = playList[currentSongIndex];
    dispatch(changeCurrentSongIndexActions(currentSongIndex));
    dispatch(changeCurrentSongActions(currentSong));

		// 4 获取当前歌词
		getLyrics(currentSong.id).then(res => {
			// 拿到所有歌词
			const lyrics = res.lrc && res.lrc.lyric
			// 拿到解析后的歌词
			const lyricList = paresLyric(lyrics)
			dispatch(changeLyricsAction(lyricList))
		})
	}
}

// 修改歌词索引
export const changeCurrentLyricIndexAction = (index) => ({
  type: CHANGE_CURRENT_LYRIC_INDEX,
  data:index
})