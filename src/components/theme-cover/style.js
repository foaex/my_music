import styled from "styled-components";

export const ThemeCoverWrapper = styled.div`
	width: 140px;
	margin: 20px ${props => (props.right || 0)} 20px 0;

	.cover-top{
		position: relative;

		&>img{
			width: 140px;
			height: 140px;
			
		}
		.cover{
			cursor: pointer;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-position: 0 0;

			.info{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 10px;
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				height: 27px;
				color: #ccc;
				background-position: 0 -538px;

				.erji {
          margin-right: 5px;
          display: inline-block;
          width: 14px;
          height: 11px;
          background-position: 0 -23px;
        }

				.play {
					cursor: pointer;
          display: inline-block;
          width: 16px;
          height: 17px;
          background-position: 0 0;
        }
			}
		}
	}
	.cover-bottom {
		display: block;
    font-size: 14px;
    color: #000;
    margin-top: 5px;
  }

  .cover-source {
    color: #666;
  }

`