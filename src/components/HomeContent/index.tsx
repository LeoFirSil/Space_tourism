import * as S from './styles'

const HomeContent = () => (
  <S.HomeContainer className="container">
    <S.Containerfist>
      <S.ContainerSec>
        <S.TextContent>
          <h3>SO, YOU WANT TO TRAVEL TO</h3>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </S.TextContent>
        <S.Link to="/destination">
          <span />
          <h2>EXPLORE</h2>
        </S.Link>
      </S.ContainerSec>
    </S.Containerfist>
  </S.HomeContainer>
)

export default HomeContent
