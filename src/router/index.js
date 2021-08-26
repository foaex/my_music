
import { Redirect } from 'react-router-dom'

import Discover from '../pages/discover'
import Recommend from '../pages/discover/c-pages/recommend'
import Album from '../pages/discover/c-pages/album'
import Artist from '../pages/discover/c-pages/artist'
import djradio from '../pages/discover/c-pages/djradio'
import ranking from '../pages/discover/c-pages/ranking'
import songs from '../pages/discover/c-pages/songs'


import Friend from '../pages/friend'
import Mine from '../pages/mine'


const routes = [
	{
		path: "/",
		exact: true,
		render: () => (
			<Redirect to="/discover" />
		)
	},
	{
		path: '/discover',
		component: Discover,
		routes: [
			{
				path: '/discover',
				exact: true,
				render: () => (
					<Redirect to="/discover/recommend" />
				)
			},
			{
				path: "/discover/recommend",
				component: Recommend
			},
			{
				path: "/discover/album",
				component: Album
			},
			{
				path: "/discover/artist",
				component: Artist
			}, {
				path: "/discover/djradio",
				component: djradio
			},
			{
				path: "/discover/ranking",
				component: ranking
			},
			{
				path: "/discover/songs",
				component: songs
			}
		]
	},
	{
		path: '/friend',
		component: Friend
	},
	{
		path: '/mine',
		component: Mine
	}
]

export default routes
