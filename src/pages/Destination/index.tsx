import Header from '../../components/Header'
import { Background } from '../Home/styles'
import ProductList from '../../components/ProductList'
import Stars from '../../models/Stars'
import moon from '../../assets/destination/image-moon.webp'
import mars from '../../assets/destination/image-mars.webp'
import titan from '../../assets/destination/image-titan.webp'
import europa from '../../assets/destination/image-europa.webp'

const space: Stars[] = [
  {
    id: 1,
    description:
      'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    distance: '384,400 KM',
    image: moon,
    name: 'MOON',
    travelTime: '3 DAYS'
  },
  {
    id: 2,
    description:
      'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    distance: '225 MIL. KM',
    image: mars,
    name: 'MARS',
    travelTime: '9 MONTHS'
  },
  {
    id: 3,
    description:
      'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    distance: '628 MIL. KM',
    image: europa,
    name: 'EUROPA',
    travelTime: '3 YEARS'
  },
  {
    id: 4,
    description:
      'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    distance: '1.6 BIL. KM',
    image: titan,
    name: 'TITAN',
    travelTime: '7 YEARS'
  }
]

const Destination = () => (
  <Background page="destination">
    <Header />
    <ProductList stars={space} />
  </Background>
)

export default Destination
