import * as S from './styles'

type Rocket = {
  id: number
  title: string
}

type Props = {
  image: string
  title: string
  description: string
  activeId: number
  setActiveId: (id: number) => void
  rockets: Rocket[]
}

const ProductTec = ({
  image,
  title,
  description,
  activeId,
  setActiveId,
  rockets
}: Props) => {
  return (
    <S.Container>
      <S.Card>
        <div>
          <h3>
            <span>03</span>SPACE LAUNCH 101
          </h3>
          <S.CardContainer>
            <S.LinkContainer>
              {rockets.map((rocket) => (
                <li
                  key={rocket.id}
                  className={activeId === rocket.id ? 'active' : ''}
                  onClick={() => setActiveId(rocket.id)}
                >
                  {rocket.id}
                </li>
              ))}
            </S.LinkContainer>
            <S.textContainer>
              <h2>THE TERMINOLOGY...</h2>
              <h1>{title}</h1>
              <p>{description}</p>
            </S.textContainer>
            <S.ImgContainer>
              <img src={image} alt={title} />
            </S.ImgContainer>
          </S.CardContainer>
        </div>
      </S.Card>
    </S.Container>
  )
}

export default ProductTec
