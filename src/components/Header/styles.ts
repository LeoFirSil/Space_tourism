import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { breakpoints } from '../../styles'

import { colors } from '../../styles'

export const BannerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 136px;
  position: relative;

  @media (max-width: ${breakpoints.desktop}) {
    height: 96px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 375px;
    height: 88px;
    padding: 24px;
  }
`

export const Haburguer = styled.img`
  display: none;
  width: 24px;
  height: 21px;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`

export const Close = styled.img`
  display: none;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    position: fixed;
    right: 24px;
    top: 32px;
  }
`

export const BoxClose = styled.div`
  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    width: 254px;
    height: 100vh;
    top: 0;
    left: 121px;
    backdrop-filter: blur(100px);
    position: fixed;
  }
`

export const Logo = styled.img`
  width: 48px;
  height: 48px;
  margin-left: 64px;
  display: block;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 0;
  }
`
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 736px;
  height: 48px;
  margin-top: 64px;
  position: relative;
  z-index: 2;

  @media (max-width: ${breakpoints.desktop}) {
    margin-top: 24px;
    width: 48px;
  }

  span {
    background-color: ${colors.white};
    width: 75%;
    height: 1px;
    opacity: 0.25;
    margin-left: auto;

    @media (max-width: ${breakpoints.desktop}) {
      width: 0;
      display: none;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin: 0;
    width: 100%;
    height: 100%;
    justify-content: space-between;
  }
`

export const MenuBar = styled.div<{ open?: boolean }>`
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

  ul {
      display: flex;
      justify-content: space-between;
    }

  @media (max-width: ${breakpoints.desktop}) {
    width: 640px;
    margin-top: 0;
  }

  li {
    margin-right: 48px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    top: 88px;
    left: 121px;
    height: 100vh;
    position: fixed;
    flex-direction: column;
    width: 254px;
    align-items: start;
    justify-content: flex-start;
    z-index: 3;
    transition? transform 0.3s ease-in-out;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};

    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 48px;
      height: 172px;
    }
  }
`

export const Link = styled(NavLink)`
  text-decoration: none;
  text-align: center;
  font-size: 16px;
  max-height: 100%;
  color: ${colors.white};

  > span {
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

  .home {
    @media (max-width: ${breakpoints.desktop}) {
      display: none;
    }
    @media (max-width: ${breakpoints.tablet}) {
      display: block;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 32px;
    display: flex;
    width: 222px;
    heght: 172px;

    &.active {
      border-bottom: none;
      border-right: 2px solid ${colors.white};
      padding: 0;
    }

    &:not(.active):hover {
      border-bottom: none;
      border-right: 2px solid ${colors.blue300};
      padding: 0;
    }
  }
`
