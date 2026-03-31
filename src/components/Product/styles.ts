import styled from 'styled-components'
import { colors } from '../../styles'
import { breakpoints } from '../../styles'

export const Card = styled.div`
  width: 100%;
  height: 792px;
  display: block;

  @media (max-width: ${breakpoints.desktop}) {
    height: 928px;
  }

  h3 {
    color: ${colors.blue300};
    font-size: 34px;
    letter-spacing: 2px;
    width: 357px;
    white-space: nowrap;

    @media (max-width: ${breakpoints.desktop}) {
      font-size: 20px;
    }
  }

  h1 {
    color: ${colors.white};
    font-size: 96px;
    margin-top: 40px;

    @media (max-width: ${breakpoints.desktop}) {
      font-size: 80px;
    }
  }

  span {
    margin-right: 24px;
    color: rgba(255, 255, 255, 0.25);
    font-weight: bold;
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 792px;
    width: 375px;
    align-items: center;

    h3 {
      width: 327px;
      text-align: center;
      font-size: 16px;
      margin-bottom: 24px;
    }

    h1 {
      font-size: 56px;
      margin-top: 24px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 327px;
  }
`
export const BoxDoble = styled.div<{ isFist?: boolean }>`
  height: 480px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${({ isFist }) => (isFist ? '24px' : '151px')};

  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 0;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 327px;
  }
`

export const BoxImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  img {
    width: 480px;
    height: 480px;
    margin: 0 30px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    margin-top: 66px;
    margin-bottom: 74px;

    img {
      width: 300px;
      height: 300px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 327px;
    height: 202px;
    align-items: center;
    justify-content: center;
    margin: 26px auto;

    img {
      width: 150px;
      height: 150px;
    }
  }
`

export const Tabs = styled.ul`
  color: ${colors.blue300};
  display: flex;

  li {
    font-size: 16px;
    margin-right: 32px;
    padding-bottom: 13px;
    cursor: pointer;

    &.active {
      border-bottom: 2px solid ${colors.white};
    }

    &:not(.active):hover {
      border-bottom: 2px solid ${colors.blue300};
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 32px;
    li {
      font-size: 14px;
      margin: 0 16px;
    }
  }
`

export const BoxText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const TextContainer = styled.div`
  height: 480px;
  width: 445px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  p {
    color: ${colors.blue300};
    height: 128px;
    font-size: 18px;
    line-height: 32px;
    margin-top: 16px;
  }

  span {
    background-color: ${colors.white};
    padding: 1px 220px;
    opacity: 0.25;
    margin: 40px 0;
  }

  @media (max-width: ${breakpoints.desktop}) {
    width: 514px;
    align-items: center;
    text-align: center;

    p {
      height: 87px;
      font-size: 16px;
    }

    span {
      padding: 1px 250px;
      margin: 24px 0;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 327px;
    height: 466px;

    p {
      height: 136px;
      font-size: 15px;
      line-height: 26px;
    }

    span {
      padding: 1px 163px;
    }
  }
`

export const Infos = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  label {
    font-size: 14px;
    color: ${colors.blue300};
  }

  h2 {
    color: ${colors.white};
    margin-top: 12px;
    font-size: 32px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    gap: 24px;

    h2 {
      font-size: 28px;
    }
  }
`

export const InfosContainer = styled.div`
  width: 50%;
  margin-right: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 0;
  }
`
