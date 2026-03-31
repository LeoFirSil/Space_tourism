import { useState } from 'react'

import Rockets from '../../models/Rockets'
import ProductTec from '../ProductTec'

type Props = {
  rockets: Rockets[]
}

const ProductListTec = ({ rockets }: Props) => {
  const [activeId, setActiveId] = useState<number>(1)

  const activeRocket = rockets.find((rocket) => rocket.id == activeId)
  return (
    <div>
      <ul>
        {activeRocket && (
          <ProductTec
            imageMob={activeRocket.imageMob}
            image={activeRocket.image}
            title={activeRocket.title}
            description={activeRocket.description}
            activeId={activeId}
            setActiveId={setActiveId}
            rockets={rockets}
          />
        )}
      </ul>
    </div>
  )
}

export default ProductListTec
