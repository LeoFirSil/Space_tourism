import Header from '../../components/Header'
import { Background } from '../Home/styles'
import ProductListTec from '../../components/ProductListTec'
import launch from '../../assets/technology/image-launch-vehicle-portrait.jpg'
import launchMob from '../../assets/technology/image-launch-vehicle-landscape.jpg'
import spaceport from '../../assets/technology/image-spaceport-portrait.jpg'
import spaceportMob from '../../assets/technology/image-spaceport-landscape.jpg'
import capsule from '../../assets/technology/image-space-capsule-portrait.jpg'
import capsuleMob from '../../assets/technology/image-space-capsule-landscape.jpg'
import Rockets from '../../models/Rockets'

const lance: Rockets[] = [
  {
    id: 1,
    title: 'LAUNCH VEHICLE',
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    image: launch,
    imageMob: launchMob
  },
  {
    id: 2,
    title: 'SPACEPORT',
    description:
      'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
    image: spaceport,
    imageMob: spaceportMob
  },
  {
    id: 3,
    title: 'SPACE CAPSULE',
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    image: capsule,
    imageMob: capsuleMob
  }
]

const Tecnology = () => (
  <Background page="tecnology">
    <Header />
    <ProductListTec rockets={lance} />
  </Background>
)

export default Tecnology
