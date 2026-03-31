import { NavLink } from 'react-router-dom'

import { breakpoints } from '../../styles'
import styled from 'styled-components'
import { colors } from '../../styles'

export const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  height: 888px;
  align-items: center;
  justify-content: center;
  color: ${colors.white};

  @media (max-width: ${breakpoints.desktop}) {
    height: 928px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 724px;
  }
`
export const Containerfist = styled.div`
  width: 100%;
  height: 632px;
  display: flex;
  align-items: flex-end;

  @media (max-width: ${breakpoints.tablet}) {
    margin: 24px;
  }
`
export const ContainerSec = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${breakpoints.desktop}) {
    flex-direction: column;
    min-height: 672px;
    justify-content: normal;
  }
`

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 343px;
  width: 540px;
  gap: 24px;

  @media (max-width: ${breakpoints.desktop}) {
    align-items: center;
    justify-content: flex-start;
    margin-top: 24px;
    margin-bottom: 66px;
  }

  h1 {
    font-size: 144px;
  }

  h3 {
    color: ${colors.blue300};
    font-size: 28px;
    letter-spacing: 4px;
  }

  p {
    color: ${colors.blue300};
    font-size: 18px;
    line-height: 28px;

    @media (max-width: ${breakpoints.desktop}) {
      font-size: 16px;
      width: 512px;
      text-align: center;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 327px;
    height: 294px;
    margin-bottom: 0;

    h1 {
      font-size: 80px;
    }

    h3 {
      font-size: 16px;
      letter-spacing: 2px;
    }

    p {
      font-size: 15px;
      width: 100%;
    }
  }
`
export const Link = styled(NavLink)`
  background-color: ${colors.white};
  color: ${colors.blue900};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  font-size: 24px;
  width: 272px;
  height: 272px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  z-index: 1;
  position: relative;
  flex-shrink: 0;
  flex-grow: 0;

  &:hover span {
    display: block;
  }

  span {
    display: none;
    background-color: ${colors.white};
    width: 450px;
    height: 450px;
    border-radius: 50%;
    z-index: 2;
    position: absolute;
    opacity: 0.2;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 144px;
    height: 144px;
    font-size: 12px;
    margin-top: 119px;

    span {
      width: 250px;
      height: 250px;
    }
  }
`
