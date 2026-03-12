import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  width: 100%;
  height: 792px;
  display: block;

  h3 {
    color: ${colors.blue300};
    font-size: 34px;
    letter-spacing: 2px;
    width: 357px;
    white-space: nowrap;
  }

  span {
    margin-right: 24px;
    color: rgba(255, 255, 255, 0.25);
    font-weight: bold;
  }
`

export const ContainerFist = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 540px;
  height: 631px;
  margin-right: 32px;

  h1 {
    color: ${colors.white};
    font-size: 56px;
    margin-top: 16px;
  }

  h2 {
    color: ${colors.white};
    opacity: 50%;
    font-size: 32px;
  }

  p {
    color: ${colors.blue300};
    height: 128px;
    font-size: 18px;
    line-height: 32px;
    margin-top: 16px;
  }
`

export const LinkContainer = styled.div`
  display: flex;
  width: 100%;
  height: 63px;

  li {
    background-color: ${colors.white};
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-right: 40px;
    opacity: 17%;
    cursor: pointer;

    &.active {
      opacity: 100%;
    }

    &:not(.active):hover {
      opacity: 50%;
    }
  }
`
export const ImgContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    display: block;
    width: 100;
    height: 676px;
    -webkit-mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1) 80%,
      rgba(0, 0, 0, 0) 100%
    );
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 100% 100%;
    mask-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 1) 80%,
        rgba(0, 0, 0, 0)
      )
      100%;
    mask-repeat: no-repeat;
    mask-size: 100% 100%;
  }
`
