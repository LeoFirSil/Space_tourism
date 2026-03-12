import { NavLink } from 'react-router-dom'

import styled from 'styled-components'
import { colors } from '../../styles'

export const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
`
export const Containerfist = styled.div`
  width: 100%;
  height: 632px;
  display: flex;
  align-items: flex-end;
`
export const ContainerSec = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 343px;
  width: 100%;
  gap: 24px;

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
    line-height: 24px;
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
`
