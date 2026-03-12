import * as S from './styles'

type people = {
  id: number
  name: string
}

type Props = {
  image: string
  name: string
  description: string
  title: string
  activeId: number
  setActiveId: (id: number) => void
  peoples: people[]
}

const ProductCrew = ({
  image,
  name,
  description,
  title,
  activeId,
  setActiveId,
  peoples
}: Props) => {
  return (
    <div className="container">
      <S.Card>
        <h3>
          <span>02</span>MEET YOUR CREW
        </h3>
        <S.ContainerFist>
          <div>
            <S.TextContainer>
              <h2>{title}</h2>
              <h1>{name}</h1>
              <p>{description}</p>
            </S.TextContainer>
            <S.LinkContainer>
              {peoples.map((people) => (
                <li
                  key={people.id}
                  className={activeId === people.id ? 'active' : ''}
                  onClick={() => setActiveId(people.id)}
                />
              ))}
            </S.LinkContainer>
          </div>
          <S.ImgContainer>
            <img src={image} alt={name} />
          </S.ImgContainer>
        </S.ContainerFist>
      </S.Card>
    </div>
  )
}

export default ProductCrew
