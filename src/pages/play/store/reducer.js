import { Map } from 'immutable'
import { CHANGE_CURRENT_LYRIC_INDEX, CHANGE_CURRENT_SONG, CHANGE_CURRENT_SONG_INDEX, CHANGE_LOOP_VALUE, CHANGE_LYRIC_LIST, CHANGE_PLAY_LIST } from './constant';

const defaultState = Map({
	// 记录播放列表
	playList: [
    {
      "name": "有何不可",
      "id": 167876,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 5771,
          "name": "许嵩",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "600902000007916021",
      "fee": 8,
      "v": 49,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 16953,
        "name": "自定义",
        "picUrl": "https://p1.music.126.net/Md3RLH0fe2a_3dMDnfqoQg==/18590542604286213.jpg",
        "tns": [],
        "pic_str": "18590542604286213",
        "pic": 18590542604286212
      },
      "dt": 241840,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 9675799,
        "vd": -21099
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5805497,
        "vd": -18400
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3870346,
        "vd": -16900
      },
      "a": null,
      "cd": "1",
      "no": 3,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 2,
      "s_id": 0,
      "mark": 8192,
      "originCoverType": 0,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "mst": 9,
      "cp": 14026,
      "rtype": 0,
      "rurl": null,
      "publishTime": 1231516800000
    },
    {
      "name": "雅俗共赏",
      "id": 411214279,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 5771,
          "name": "许嵩",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": null,
      "fee": 8,
      "v": 31,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 34749138,
        "name": "青年晚报",
        "picUrl": "https://p1.music.126.net/Wcs2dbukFx3TUWkRuxVCpw==/3431575794705764.jpg",
        "tns": [],
        "pic": 3431575794705764
      },
      "dt": 249621,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 9987177,
        "vd": -22200
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5992323,
        "vd": -19600
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3994896,
        "vd": -17800
      },
      "a": null,
      "cd": "1",
      "no": 2,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 8192,
      "originCoverType": 0,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 5302271,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 14026,
      "publishTime": 1461723397683
    }, 
  ],
	// 记录当前播放歌曲索引
	currentSongIndex: 0,
	// 记录当前歌曲信息
	currentSong: {
		"name": "有何不可",
		"id": 167876,
		"pst": 0,
		"t": 0,
		"ar": [
			{
				"id": 5771,
				"name": "许嵩",
				"tns": [],
				"alias": []
			}
		],
		"alia": [],
		"pop": 100,
		"st": 0,
		"rt": "600902000007916021",
		"fee": 8,
		"v": 49,
		"crbt": null,
		"cf": "",
		"al": {
			"id": 16953,
			"name": "自定义",
			"picUrl": "https://p2.music.126.net/Md3RLH0fe2a_3dMDnfqoQg==/18590542604286213.jpg",
			"tns": [],
			"pic_str": "18590542604286213",
			"pic": 18590542604286212
		},
		"dt": 241840,
		"h": {
			"br": 320000,
			"fid": 0,
			"size": 9675799,
			"vd": -21099
		},
		"m": {
			"br": 192000,
			"fid": 0,
			"size": 5805497,
			"vd": -18400
		},
		"l": {
			"br": 128000,
			"fid": 0,
			"size": 3870346,
			"vd": -16900
		},
		"a": null,
		"cd": "1",
		"no": 3,
		"rtUrl": null,
		"ftype": 0,
		"rtUrls": [],
		"djId": 0,
		"copyright": 2,
		"s_id": 0,
		"mark": 8192,
		"originCoverType": 0,
		"single": 0,
		"noCopyrightRcmd": null,
		"mv": 0,
		"rtype": 0,
		"rurl": null,
		"mst": 9,
		"cp": 14026,
		"publishTime": 1231516800000
	},
	// 记录播放方式
	loopValue: 0,// 0 循环 1 随机 2 单曲，
  // 歌词数组
  lyricList:[],
  // 保存歌词索引
  currentLyricIndex:0
})

function reducer (state = defaultState, action) {
	const { type, data } = action

	switch (type) {
		case CHANGE_CURRENT_SONG:
			return state.set("currentSong", data);
		case CHANGE_PLAY_LIST:
			return state.set("playList", data);
		case CHANGE_CURRENT_SONG_INDEX:
			return state.set("currentSongIndex", data);
		case CHANGE_LOOP_VALUE:
			return state.set("loopValue", data);
    case CHANGE_LYRIC_LIST:
      return state.set("lyricList",data)
    case CHANGE_CURRENT_LYRIC_INDEX:
      return state.set("currentLyricIndex",data)
		default:
			return state
	}

}

export default reducer