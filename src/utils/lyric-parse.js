// 歌词解析
/**
[00:00.000] 作曲 : 许嵩
[00:01.000] 作词 : 许嵩
[00:22.240]天空好想下雨
[00:24.380]我好想住你隔壁
[00:26.810]傻站在你家楼下
[00:29.500]抬起头数乌云
[00:31.160]如果场景里出现一架钢琴
[00:33.640]我会唱歌给你听
[00:35.900]哪怕好多盆水往下淋
[00:41.060]夏天快要过去}
 */

// 设置正则表达式
const lyricRegx = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;

export function paresLyric(lyricString){
	const lineLyric = lyricString.split("\n")
	const totlaLyric = []
	for(let line of lineLyric){
		if(line){
			const result = lyricRegx.exec(line);
			// 判断是否匹配成功
      if (!result) continue;
			// 拿到分钟
      const time1 = result[1] * 60 * 1000;
			// 拿到秒钟
      const time2 = result[2] * 1000;
			// 拿到毫秒
      const time3 = result[3].length === 3? result[3]*1: result[3]*10;
      const time = time1 + time2 + time3;
      const content = line.replace(lyricRegx, "").trim();
      const lineObj = {time, content};
      totlaLyric.push(lineObj);
		}
	}
	return totlaLyric
}