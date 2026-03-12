import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { colors } from '../../styles'

export const BannerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 136px;
  position: relative;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 736px;
  height: 48px;
  margin-top: 64px;
  position: relative;
  z-index: 2;

  img {
    margin-left: 64px;
    display: block;
  }

  span {
    background-color: ${colors.white};
    width: 560px;
    height: 1px;
    opacity: 0.25;
    margin-left: auto;
  }
`

export const MenuBar = styled.ul`
  display: flex;
  width: 736px;
  height: 96px;
  margin-top: 40px;
  right: 0;
  color: ${colors.white};
  align-items: center;
  justify-content: flex-end;
  backdrop-filter: blur(100px);
  position: absolute;
  z-index: 1;

  li {
    margin-right: 48px;
  }
`
export const Link = styled(NavLink)`
  text-decoration: none;
  text-align: center;
  font-size: 16px;
  max-height: 100%;
  color: ${colors.white};

  b {
    margin-right: 12px;
    font-weight: bold;
  }

  &.active {
    border-bottom: 2px solid ${colors.white};
    padding: 36px 0;
  }

  &:not(.active):hover {
    border-bottom: 2px solid ${colors.blue300};
    padding: 36px 0;
  }
`
