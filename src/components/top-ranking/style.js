import styled from 'styled-components'

export const TopRankingWrapper = styled.div`
flex: 1;

	.header{
		height: 100px;
		margin: 20px 0 0 20px;
		display: flex;
		.image{
			width: 80px;
			height: 80px;

			img{
				width: 80px;
				height: 80px;
			}
		}

		.info{
			margin: 5px 0 0 15px;

			a {
        font-size: 14px;
        color: #333;
				h3{
					font-weight: 700;
				}
      }
			.btn {
        display: inline-block;
        text-indent: -9999px;
        width: 22px;
        height: 22px;
        margin: 8px 10px 0 0;
        cursor: pointer;
      }

      .play {
        background-position: -267px -205px;
      }

      .favor {
        background-position: -300px -205px;
      }
		}
	}
	.list{
		.list-item{
			height: 32px;
			line-height: 32px;
			position: relative;
      display: flex;
      align-items: center;

			:nth-child(-n+3) .rank {
        color: #c10d0c;
      }

      .rank {
        width: 35px;
        text-align: center;
        margin-left: 10px;
        font-size: 16px;
      }

			.info{
				height: 32px;
				width: 170px;
				display: flex;
				
				a {
					font-size: 13px;
					color:#000;
					width: 170px;
					flex: 1;
					display: inline-block;
					overflow: hidden;
				}

				.operate {
          display: flex;
          align-items: center;
          display: none;
          width: 82px;
					padding-top:3px;
					text-align: center;
          .btn {
            width: 17px;
            height: 17px;
            margin-left: 8px;
            cursor: pointer;
          }

          .play {
            background-position: -267px -268px;
          }

          .addto {
            position: relative;
            top: 2px;
            background-position: 0 -700px;
          }

          .favor {
            background-position: -297px -268px;
          }
        }
			}

			&:hover {
        .operate {
          display: block;
        }
      }
		}

	}
	.footer {
    height: 32px;
    display: flex;
    align-items: center;
    margin-right: 32px;
    justify-content: flex-end;

    a {
      color: #000;
    }
  }


`