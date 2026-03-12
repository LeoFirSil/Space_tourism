import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  padding: 48px 0 48px 165px;
`

export const Card = styled.div`
  width: 100%;
  height: 792px;
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
`
export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 734px;
  width: 100%;
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
`

export const ImgContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  img {
    width: 608px;
    height: 600px;
  }
`
