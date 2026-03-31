import styled from 'styled-components'

import { breakpoints } from '../../styles'

import background from '../../assets/home/background-home-desktop.jpg'
import backgroundTab from '../../assets/home/background-home-tablet.jpg'
import backgroundMob from '../../assets/home/background-home-mobile.jpg'

import backgroundDest from '../../assets/destination/background-destination-desktop.jpg'
import backgroundDestTab from '../../assets/destination/background-destination-tablet.jpg'
import backgroundDestMob from '../../assets/destination/background-destination-mobile.jpg'

import backgroundCrew from '../../assets/crew/background-crew-desktop.jpg'
import backgroundCrewTab from '../../assets/crew/background-crew-tablet.jpg'
import backgroundCrewMob from '../../assets/crew/background-crew-mobile.jpg'

import backgroundTec from '../../assets/technology/background-technology-desktop.jpg'
import backgroundTecTab from '../../assets/technology/background-technology-tablet.jpg'
import backgroundTecMob from '../../assets/technology/background-technology-mobile.jpg'

export const Background = styled.div<{ page?: string }>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;

  background-image: ${({ page }) => {
    switch (page) {
      case 'home':
        return `url(${background})`

      case 'destination':
        return `url(${backgroundDest})`

      case 'crew':
        return `url(${backgroundCrew})`

      case 'tecnology':
        return `url(${backgroundTec})`
    }
  }};

  @media (max-width: ${breakpoints.desktop}) {
    background-image: ${({ page }) => {
      switch (page) {
        case 'home':
          return `url(${backgroundTab})`

        case 'destination':
          return `url(${backgroundDestTab})`

        case 'crew':
          return `url(${backgroundCrewTab})`

        case 'tecnology':
          return `url(${backgroundTecTab})`
      }
    }};

  @media (max-width: ${breakpoints.tablet}) {
    background-image: ${({ page }) => {
      switch (page) {
        case 'home':
          return `url(${backgroundMob})`

        case 'destination':
          return `url(${backgroundDestMob})`

        case 'crew':
          return `url(${backgroundCrewMob})`

        case 'tecnology':
          return `url(${backgroundTecMob})`
      }
    }};
`
