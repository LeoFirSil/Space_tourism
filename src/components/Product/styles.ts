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

  h1 {
    color: ${colors.white};
    font-size: 96px;
    margin-top: 40px;
  }

  span {
    margin-right: 24px;
    color: rgba(255, 255, 255, 0.25);
    font-weight: bold;
  }
`
export const BoxDoble = styled.div<{ isFist?: boolean }>`
  height: 480px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  margin-top: ${({ isFist }) => (isFist ? '24px' : '151px')};

  img {
    width: 480px;
    height: 480px;
    margin: 0 30px;
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
`

export const TextContainer = styled.div`
  height: 480px;
  width: 539px;
  padding: 6px 47px;
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
`

export const Infos = styled.div`
  display: flex;

  label {
    font-size: 14px;
    color: ${colors.blue300};
  }

  h2 {
    color: ${colors.white};
    margin-top: 12px;
    font-size: 32px;
  }
`

export const InfosContainer = styled.div`
  width: 210px;
  margin-right: 24px;
`
