import styled from 'styled-components'
import { colors } from '../../styles'
import { breakpoints } from '../../styles'

export const Card = styled.div`
  width: 100%;
  min-height: 792px;
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

  @media (max-width: ${breakpoints.desktop}) {
    height: 928px;

    h3 {
      font-size: 24px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 744px;

    h3 {
      width: 327px;
      text-align: center;
      font-size: 16px;
    }
  }
`

export const ContainerFist = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${breakpoints.desktop}) {
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 327px;
    height: 744px;
    justify-content: normal;
    gap: 0;
  }
`

export const BoxContent = styled.div`
  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    height: 315px;
    width: 512px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 327px;
    margin-top: 64px;
  }
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

  @media (max-width: ${breakpoints.desktop}) {
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    margin: 0;

    h1 {
      font-size: 40px;
    }

    h2 {
      font-size: 28px;
      margin-top: 64px;
    }

    p {
      text-align: center;
      font-size: 16px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 327px;
    height: 245px;

    h1 {
      font-size: 24px;
    }

    h2 {
      font-size: 18px;
      margin: 0;
    }

    p {
      width: 327px;
      text-align: center;
      font-size: 15px;
      line-height: 26px;
    }
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
    margin: 0 20px;
    opacity: 17%;
    cursor: pointer;

    &.active {
      opacity: 100%;
    }

    &:not(.active):hover {
      opacity: 50%;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    align-items: center;
    justify-content: center;

    li {
      width: 10px;
      height: 10px;
      margin: 0 8px;
    }
  }
`
export const ImgContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
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
  }

  @media (max-width: ${breakpoints.desktop}) {
  margin-top: 32px;

  img {
    height: 560px;
  }
  }

  @media (max-width: ${breakpoints.tablet}) {
  margin: 0;

  img {
  height: 340px;
  }
  }
`
