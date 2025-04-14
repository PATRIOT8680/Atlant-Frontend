import { useState } from 'react'
import { skinsData } from "../../../configs/Donat/skins.data"
import './assets/styles/compiled-css/Skins.css'

import SkinsContent from "./components/SkinsContent"
import SkinsCategory from "./components/SkinsCategory"

const Skins = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('armour')

  return(
    <>
      <div className="skins">
        <SkinsContent selectedCategory={selectedCategory} />
        <div className="categories">
          { skinsData.map((category) => (
            <SkinsCategory
              key={category.id}
              category={category}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          )) }
        </div>
      </div>
    </>
  )
}

export default Skins