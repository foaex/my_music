import React, { memo } from 'react'


import PlayBar from './play-bar'

import { PlayWrapper } from './style'
export default memo(function Play() {
	return (
		<PlayWrapper>
			<PlayBar></PlayBar>
		</PlayWrapper>
	)
})
