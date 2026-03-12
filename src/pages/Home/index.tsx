import Header from '../../components/Header'
import HomeContent from '../../components/HomeContent'
import { Background } from './styles'
import background from '../../assets/home/background-home-desktop.jpg'

const Home = () => (
  <Background style={{ backgroundImage: `url(${background})` }}>
    <Header />
    <HomeContent />
  </Background>
)

export default Home
