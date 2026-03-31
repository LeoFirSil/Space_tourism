import * as S from './styles'

type Star = {
  id: number
  name: string
}

type Props = {
  image: string
  name: string
  description: string
  distance: string
  travelTime: string
  activeId: number
  setActiveId: (id: number) => void
  stars: Star[]
}

const Product = ({
  image,
  name,
  description,
  distance,
  travelTime,
  activeId,
  setActiveId,
  stars
}: Props) => {
  return (
    <div className="container">
      <S.Card>
        <h3>
          <span>01</span>PICK YOUR DESTINATION
        </h3>
        <S.BoxDoble isFist={activeId == 1}>
          <S.BoxImg>
            <img src={image} alt={name} />
          </S.BoxImg>
          <S.BoxText>
            <S.TextContainer>
              <S.Tabs>
                {stars.map((star) => (
                  <li
                    key={star.id}
                    className={activeId === star.id ? 'active' : ''}
                    onClick={() => setActiveId(star.id)}
                  >
                    {star.name}
                  </li>
                ))}
              </S.Tabs>
              <div>
                <h1>{name}</h1>
                <p>{description}</p>
              </div>
              <span />
              <S.Infos>
                <S.InfosContainer>
                  <label>AVG. DISTANCE</label>
                  <h2>{distance}</h2>
                </S.InfosContainer>
                <S.InfosContainer>
                  <label>EST. TRAVEL TIME</label>
                  <h2>{travelTime}</h2>
                </S.InfosContainer>
              </S.Infos>
            </S.TextContainer>
          </S.BoxText>
        </S.BoxDoble>
      </S.Card>
    </div>
  )
}

export default Product
