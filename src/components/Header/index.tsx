import { useState } from 'react'

import * as S from './styles'
import logo from '../../assets/shared/logo.svg'
import close from '../../assets/shared/icon-close.svg'
import hamburguer from '../../assets/shared/icon-hamburger.svg'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <S.BannerContainer>
      <S.LogoContainer>
        <S.Logo src={logo} />
        {!menuOpen ? (
          <S.Haburguer src={hamburguer} onClick={() => setMenuOpen(true)} />
        ) : (
          <S.BoxClose>
            <S.Close src={close} onClick={() => setMenuOpen(false)} />
          </S.BoxClose>
        )}
        <span />
      </S.LogoContainer>
      <S.MenuBar open={menuOpen}>
        <ul>
          <li>
            <S.Link
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <span className="home">00</span> HOME
            </S.Link>
          </li>
          <li>
            <S.Link
              to="/destination"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <span>01</span> DESTINATION
            </S.Link>
          </li>
          <li>
            <S.Link
              to="/crew"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <span>02</span> CREW
            </S.Link>
          </li>
          <li>
            <S.Link
              to="/tecnology"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <span>03</span> TECNOLOGY
            </S.Link>
          </li>
        </ul>
      </S.MenuBar>
    </S.BannerContainer>
  )
}

export default Header
