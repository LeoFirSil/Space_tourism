import Header from '../../components/Header'
import { Background } from '../Home/styles'
import ProductListCrew from '../../components/ProductListCrew'
import Peoples from '../../models/Peoples'
import douglas from '../../assets/crew/image-douglas-hurley.webp'
import mark from '../../assets/crew/image-mark-shuttleworth.webp'
import victor from '../../assets/crew/image-victor-glover.webp'
import ansari from '../../assets/crew/image-anousheh-ansari.webp'

const space: Peoples[] = [
  {
    id: 1,
    description:
      'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    title: 'COMMANDER ',
    name: 'DOUGLAS HURLEY',
    image: douglas
  },
  {
    id: 2,
    description:
      'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
    title: 'MISSION SPECIALIST ',
    name: 'MARK SHUTTLEWORTH',
    image: mark
  },
  {
    id: 3,
    description:
      'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
    title: 'PILOT',
    name: 'VICTOR GLOVER',
    image: victor
  },
  {
    id: 4,
    description:
      'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
    title: 'FLIGHT ENGINEER',
    name: 'ANOUSHEH ANSARI',
    image: ansari
  }
]

const Crew = () => (
  <Background page="crew">
    <Header />
    <ProductListCrew peoples={space} />
  </Background>
)

export default Crew
