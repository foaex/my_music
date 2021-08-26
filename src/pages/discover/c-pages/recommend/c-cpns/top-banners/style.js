import styled from 'styled-components';
import download from '@/assets/img/download.png'
import banner_sprite from '@/assets/img/banner_sprite.png'

export const BannerWrapper = styled.div`
  background: url(${props => props.bgImage}) center center/6000px;

  .banner {
    height: 270px;
    background-color: red;

    display: flex;
    position: relative;
		cursor: pointer;
  }
`

export const BannerLeft = styled.div`
  width: 730px;

  .banner-item {
    overflow: hidden;
    height: 270px;
    .image {
      width: 100%;
    }
  }
	.ant-carousel .slick-dots li {
    position: relative;
    display: inline-block;
    flex: 0 1 auto;
    box-sizing: content-box;
    width: 15px;
    height: 15px;
    padding: 0;
    text-align: center;
    text-indent: -999px;
    vertical-align: top;
		margin: 0 3px;
	}
	.ant-carousel .slick-dots li button {
    display: block;
    width: 15px;
    height: 15px;
    padding: 0;
    color: transparent;
    font-size: 0;
    background: #ccc;
    border: 0;
    border-radius: 50%;
    outline: none;
    cursor: pointer;
		opacity: 0.3;
	}
	.ant-carousel .slick-dots li.slick-active button{
    width: 15px;
		height: 15px;
		background: red;
		display: block;
    padding: 0;
    font-size: 0;
    border: 0;
    border-radius: 50%;
    outline: none;
    cursor: pointer;
		opacity: 1;
	}
`

export const BannerRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: "_blank"
})`
  width: 254px;
  height: 270px;
  background: url(${download});
`

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${banner_sprite});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, .1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`
