import { useState } from 'react'

import Stars from '../../models/Stars'
import Product from '../Product'

type Props = {
  stars: Stars[]
}

const ProductList = ({ stars }: Props) => {
  const [activeId, setActiveId] = useState<number>(1)

  const activeStar = stars.find((star) => star.id == activeId)
  return (
    <div>
      <ul>
        {activeStar && (
          <Product
            image={activeStar.image}
            name={activeStar.name}
            description={activeStar.description}
            distance={activeStar.distance}
            travelTime={activeStar.travelTime}
            activeId={activeId}
            setActiveId={setActiveId}
            stars={stars}
          />
        )}
      </ul>
    </div>
  )
}

export default ProductList
