import Header from '../../components/Header'
import HomeContent from '../../components/HomeContent'
import { Background } from './styles'

const Home = () => (
  <Background page="home">
    <Header />
    <HomeContent />
  </Background>
)

export default Home
