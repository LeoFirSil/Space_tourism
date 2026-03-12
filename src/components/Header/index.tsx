import * as S from './styles'
import logo from '../../assets/shared/logo.svg'

const Header = () => (
  <S.BannerContainer>
    <S.LogoContainer>
      <img src={logo} />
      <span />
    </S.LogoContainer>
    <S.MenuBar>
      <li>
        <S.Link to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          <b>00</b> HOME
        </S.Link>
      </li>
      <li>
        <S.Link
          to="/destination"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <b>01</b> DESTINATION
        </S.Link>
      </li>
      <li>
        <S.Link
          to="/crew"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <b>02</b> CREW
        </S.Link>
      </li>
      <li>
        <S.Link
          to="/tecnology"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <b>03</b> TECNOLOGY
        </S.Link>
      </li>
    </S.MenuBar>
  </S.BannerContainer>
)

export default Header
