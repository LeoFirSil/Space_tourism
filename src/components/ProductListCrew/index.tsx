import { useState } from 'react'

import Peoples from '../../models/Peoples'
import Product from '../ProductCrew'

type Props = {
  peoples: Peoples[]
}

const ProductList = ({ peoples }: Props) => {
  const [activeId, setActiveId] = useState<number>(1)

  const activePeople = peoples.find((people) => people.id == activeId)
  return (
    <div>
      <ul>
        {activePeople && (
          <Product
            image={activePeople.image}
            name={activePeople.name}
            description={activePeople.description}
            title={activePeople.title}
            activeId={activeId}
            setActiveId={setActiveId}
            peoples={peoples}
          />
        )}
      </ul>
    </div>
  )
}

export default ProductList
