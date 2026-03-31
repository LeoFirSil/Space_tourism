import styled from 'styled-components'
import { colors } from '../../styles'
import { breakpoints } from '../../styles'

export const Container = styled.div`
  padding: 48px 0 48px 165px;

  @media (max-width: ${breakpoints.desktop}) {
    padding: 40px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 375px;
    padding: 24px;
  }
`

export const Card = styled.div`
  width: 100%;
  min-height: 792px;
  display: block;

  h3 {
    color: ${colors.blue300};
    font-size: 28px;
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
      font-size: 20px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 327px;
    heigt: 677px;

    h3 {
      font-size: 16px;
      width: 327px;
      text-align: center;
    }
  }
`
export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  li {
    color: ${colors.white};
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 1px solid ${colors.white};
    opacity: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    font-family: 'Bellefair';
    cursor: pointer;

    &.active {
      color: ${colors.blue900};
      background-color: ${colors.white};
      border: none;
      opacity: 100%;
    }

    &:not(.active):hover {
      border: 1px solid ${colors.white};
      opacity: 100%;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    flex-direction: row;
    margin-top: 32px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    gap: 16px;

    li {
      font-size: 18px;
      width: 40px;
      height: 40px;
    }
  }
`

export const ImgContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`

export const Img = styled.img`
  width: 608px;
  height: 600px;
  display: block;

  @media (max-width: ${breakpoints.desktop}) {
    display: none;
  }
`

export const ImgMob = styled.img`
  display: none;

  @media (max-width: ${breakpoints.desktop}) {
    display: block;
    margin-top: 88px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 258px;
  }
`

export const textContainer = styled.div`
  display: block;
  width: 491px;
  height: 301px;

  h1 {
    color: ${colors.white};
    font-size: 56px;
    margin-top: 16px;
    margin-bottom: 24px;
  }

  h2 {
    color: ${colors.white};
    font-size: 32px;
    opacity: 50%;
  }

  p {
    color: ${colors.blue300};
    font-size: 18px;
    line-height: 32px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    margin-top: 40px;
    text-align: center;

    h2 {
      font-size: 28px;
    }

    h1 {
      font-size: 40px;
      margin: 16px 0;
    }

    p {
      font-size: 16px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 327px;
    h2 {
      font-size: 18px;
    }

    h1 {
      font-size: 24px;
      margin: 16px 0;
    }

    p {
      font-size: 15px;
      line-height: 26px;
    }
  }
`

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 734px;
  width: 100%;

  @media (max-width: ${breakpoints.desktop}) {
    flex-direction: column;
    ${ImgContainer} {
      order: 1;
    }

    ${LinkContainer} {
      order: 2;
    }

    ${textContainer} {
      order: 3;
    }
  }
`
