import request from "./axios"

// 获取歌曲的信息
export function getSongDetail(ids) {
  return request({
    url: "/song/detail",
    params: {
      ids
    }
  })
}

// 获取歌词信息
export function getLyrics(id) {
  return request({
    url: "/lyric",
    params: {
      id
    }
  })
}