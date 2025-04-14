import '../assets/styles/Rent.css'
import { RootState } from '../../../reducer/rootReducer'
import { RentData } from '../../../configs/Rent/rent.data'
import { Dispatch, SetStateAction, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { EventManager } from '../../../util/eventmanager';

interface IRentTab {
  setSelectRentTab: Dispatch<SetStateAction<number>>;
  selectRentTab: number,
  vehRentData: any,
  }

const Rent = ({ setSelectRentTab, selectRentTab, vehRentData }: IRentTab) => {

  const [rentData, setRentData] = useState<any>(vehRentData)

  const dispatch = useDispatch();

  const [selectImg, setSelectImg] = useState<boolean>(false)
  const [activeVeh, setActiveVeh] = useState<boolean>(false)
  const [vehID, setVehID] = useState<number>(-1)

  const rentHandle = (selectTab: number) => {
    setActiveVeh(true)
    setVehID(selectTab)
    dispatch({type: 'SET_RENT', 
        hash: vehRentData[selectTab].params.hash,
        price: vehRentData[selectTab].params.price,
        shop: vehRentData[selectTab].params.shop
      })
      setSelectRentTab(selectTab);
      setSelectImg(true);
  }

  const showImageItemHandle = (tab: number) => {
    setSelectRentTab(tab);
    setSelectImg(true);
  }

  const restImg = (tab: number) => {
   if(vehID === -1){
      setSelectRentTab(tab)
      setSelectImg(false); 
   } else{
    setSelectRentTab(vehID); 
    setSelectImg(true); 
   }
  }
 

  return (
    <>
    <div className="rentWrapper">
    <div className="effect-bg"></div>
      <div className="rentContainer">
        <div className="container">
            <div className="item">Название</div>
            <div className="price">Цена</div>
        </div>
        {vehRentData.map((veh: any, idx: number) => {
          return (
            <div className={`itemContainer ${vehID === idx ? 'active' : ''}`} key = {idx} id = {`${idx + 1}`} onClick={() => rentHandle(idx)} onMouseEnter={() => showImageItemHandle(idx)} onMouseLeave = {() => restImg(idx)}>
                <div className="rentItem">{veh.params.hash}</div>
                <div className="rentPrice">{veh.params.price}</div>
            </div>
          )
        })}
        <div className="imgContainer">
           <img className={selectImg ? 'imgItem' : 'hidden'} src= {`/assets/img/rentVeh/${selectImg ? selectRentTab : vehID}.png`} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Rent