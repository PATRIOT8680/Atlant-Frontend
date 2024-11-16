import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../reducer/rootReducer";
import './assets/styles/compiled-css/Clothes.css'

import { clothesTopData } from "../../../../configs/createChar/clothesTop.data";
import { clothesHatData } from "../../../../configs/createChar/clothesHat.data";
import { clothesShoesData } from "../../../../configs/createChar/clothesShoes";

import { IClothesTop } from "../../../../configs/createChar/clothesTop.data";
import { IClothesHat } from "../../../../configs/createChar/clothesHat.data";
import { IClothesShoes } from "../../../../configs/createChar/clothesShoes";

const Clothes = () => {
  const genderChar = useSelector((state: RootState) => state.genderReducer)
  const clothesTop = clothesTopData[0][genderChar as keyof IClothesTop]
	const clothesHat = clothesHatData[0][genderChar as keyof IClothesHat]
	const clothesShoes = clothesShoesData[0][genderChar as keyof IClothesShoes]

  const [topId, setTopId] = useState<number | null>(1)
	const [hatId, setHatId] = useState<number | null>(1)
	const [shoesId, setShoesId] = useState<number | null>(1)

  return(
    <>
      <div className="clothes-create-char">
				<div className="section">
          <span className='title'>Головной убор</span>
					<ul className='list'>
						{clothesHat.map((clothes, index) => (
							<div
								className={`clothes ${hatId === clothes.id ? 'active' : ''}`}
								onClick={() => setHatId(clothes.id)}
								key={index}
							>
								<img
									className='img-clothes'
									src={`assets/img/createChar/clothesHat/${genderChar}/${clothes.id}.png`}
								/>
							</div>
						))}
					</ul>
        </div>
        <div className="section">
          <span className='title'>Верх</span>
					<ul className='list'>
						{clothesTop.map((clothes, index) => (
							<div
								className={`clothes ${topId === clothes.id ? 'active' : ''}`}
								onClick={() => setTopId(clothes.id)}
								key={index}
							>
								<img
									className='img-clothes'
									src={`assets/img/createChar/clothesTop/${genderChar}/${clothes.id}.png`}
								/>
							</div>
						))}
					</ul>
        </div>
				<div className="section">
          <span className='title'>Низ</span>
					<ul className='list'>
						{clothesShoes.map((clothes, index) => (
							<div
								className={`clothes ${shoesId === clothes.id ? 'active' : ''}`}
								onClick={() => setShoesId(clothes.id)}
								key={index}
							>
								<img
									className='img-clothes'
									src={`assets/img/createChar/clothesShoes/${genderChar}/${clothes.id}.png`}
								/>
							</div>
						))}
					</ul>
        </div>
      </div>
    </>
  )
}

export default Clothes;