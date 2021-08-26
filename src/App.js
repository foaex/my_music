import React, { memo } from 'react'
import { HashRouter } from 'react-router-dom'
import routes from './router'
import store from './store'
import { Provider } from 'react-redux'

import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import { renderRoutes } from 'react-router-config'


export default memo(function App () {
	return (
		<Provider store={store}>
			<HashRouter>
				<AppHeader />
				{renderRoutes(routes)}
				<AppFooter />
			</HashRouter>
		</Provider >
	)
})
