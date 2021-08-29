import request from "./axios";

// 轮播图数据请求
export function getTopBanner() {
  return request({
    url: "/banner"
  })
}

// 热门推荐数据请求
export function getHotRecommend(limit) {
  return request({
    url:"/personalized",
    params:{
      limit
    }
  })
}

// 新碟上架数据请求
export function getNewAlbums(limit) {
  return request({
    url:"/top/album",
    params:{
      limit
    }
  })
}

// 榜单数据请求
export function getTopList() {
  return request({
    url: "/toplist",
  })
}

// 根据id值来获取各个榜单的数据
export function getRankingList(id) {
  return request({
    url:"/playlist/detail",
    params:{
      id
    }
  })
}