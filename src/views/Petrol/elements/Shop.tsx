import { useContext } from 'react'
import '../assets/styles/compiled-css/Shop.css'

import { PetrolIndexContext } from '../Index'
import { productsData } from '../../../store/Petrol/products.data'

import Blob from '../assets/img/blob.svg'
import Shop_logo from '../assets/img/shop-logo.svg'
import Cash_svg from '../assets/img/cash-shop.svg'
import Card_svg from '../assets/img/card-shop.svg'

const Shop = () => {
  const selectedPetrolName = useContext(PetrolIndexContext)

  return(
    <>
      <div className="shop">
        <div className="blobs">
          <img src={Blob} id="one" />
          <img src={Blob} id="two" />
        </div>
        <div className="content-inside">
          <div className="header">
            <img className='logo' src={Shop_logo} />
            <span className="description">Фирма {selectedPetrolName} предлагает для покупки востребованные товары</span>
          </div>
          <div className="all-products">
            {productsData.map((product, index) => (
              <div className="product" key={index} id={product.shortName}>
                <div className="header">
                  <span className="name">{product.fullName}</span>
                  <span className="price">${product.price}</span>
                </div>
                <img className='product-img' src={`/src/assets/img/petrolShop/${product.shortName}.png`} />
                <div className="pay-select">
                  <div className='pay' id='cash'>
                    <img className='icon' src={Cash_svg} />
                    <span className="title">Наличными</span>
                  </div>
                  <div className='pay' id='card'>
                    <img className='icon' src={Card_svg} />
                    <span className="title">Картой</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop