import styled from 'styled-components'

export const AlbumWrapper = styled.div`
	margin-top:50px;
	.content{
		height: 186px;
		background-color: #f5f5f5;
		display: flex;
		align-items:center; 
		margin: 20px 0 37px;
		border: 1px solid #d3d3d3;
	}
	.arrow{
		width: 25px;
		height: 25px;
		cursor: pointer;
	}
	.arrow-left{
		background-position: -260px -75px;
	}
	.arrow-right{
		background-position: -320px -75px;
	}
	.album{
		width: 650px;
		height: 154px;
		.ant-carousel .slick-slide {
			height: 154px;
		}

		.page {
			display: flex !important;
			justify-content: space-between;
			align-items: center;
		}
	}
`