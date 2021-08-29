import styled from 'styled-components'

export const AlbumWrapper = styled.div`

	display: flex;
	flex: 1;
	overflow: hidden;
	flex-direction: column;
	justify-content:space-between;
	align-items: center;

	.album-image{
		position: relative;
    width: ${props => props.width};
		margin-top:17px;
		img {
      width: ${props => props.height };
      height: ${props => props.height};
    }

		.cover{
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-position: 0 ${props => props.bgp};
			text-indent: -9999px;
		}
	}

	.ablum-info{
		font-size: 12px;
    width: ${props => props.width};
    .name {
			padding-top:3px;
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .artist {
      color: #666;
			white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
	}

`