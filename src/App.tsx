import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './reducer/rootReducer'
import { useNotify } from './components/Notify/NotificationProvider'

import './assets/styles/compiled-css/App.css'
import './assets/fonts/Montserrat/stylesheet.css'
import './assets/fonts/MBF/stylesheet.css'
import './assets/fonts/BebasNeue/stylesheet.css'
import './assets/fonts/Karantina/stylesheet.css'

import { store } from './store/store'
import { EventManager }  from './util/eventmanager.ts'
import { showPetrol } from './actions/petrol/petrol'
import { oneTwoSelectPerson, showSelectPerson, threeSelectPerson } from './actions/selectPerson/selectPerson.ts'
import { selectPetrolData } from './configs/Petrol/selectPetrol.data'

// import DonatMenu from "./views/Donat/Index";
import Petrol from './views/Petrol/Index'
import HUD from './views/HUD/Index'
import DialogMenu from './views/Dialog/Index'
import InteractionPlayer from './views/InteractionPlayer/Index'
import Auth from './views/Auth/Index'
import SelectPerson from './views/SelectPerson/Index'
import CreateChar from "./views/CreateChar/Index";
import DonatMenu from './views/Donat/Index'
import IDCard from './views/idcard/IDCard.jsx'
import License from './views/license/License.jsx'
import WorkID from './views/workid/WorkID.jsx'
import AdminMenu from './views/AdminMenu/Index.tsx'

import { productsData } from './configs/Petrol/products.data.ts'

const App = () => {
  const hudVisible = useSelector((state: RootState) => state.hudReducer.isVisible)
  const petrolVisible = useSelector((state: RootState) => state.petrolReducer.isVisible)
  const dialogVisible = useSelector((state: RootState) => state.dialogReducer.isVisible)
  const interactionPlayerVisible = useSelector((state: RootState) => state.interactionPlayerReducer.isVisible)
  const sendNotifyReducer = useSelector((state: RootState) => state.sendNotifyReducer)
  const authVisible = useSelector((state: RootState) => state.authReducer.isVisible)
  const selectPersonVisible = useSelector((state: RootState) => state.selectPersonReducer.isVisible)
  const createCharVisible = useSelector((state: RootState) => state.createCharReducer.isVisible)
  const adminMenuVisible = useSelector((state: RootState) => state.adminMenuReducer.isVisible)

  const [petrolIsVisible, setpetrolIsVisible] = useState<boolean>(true)

  const dispatch = useDispatch();

  const sendNotify = useNotify()

  const [selectedType, setSelectedType] = useState<string | null>(selectPetrolData[0].type)
  const [personData, setPersonData] = useState<any[]>([])
  const [vehRentData, setVehRentData] = useState<any[]>([])

  const getSelectedPrice = (price: number) => {
    const selectedPetrol = selectPetrolData.find((petrol) => {
      return petrol.type === selectedType
    })
    if(selectedPetrol){
      selectedPetrol.price = Math.floor(price)
      return selectedPetrol.price
    }else{
        return 0
    }
  }

  const getSelectedItemPrice = (itemsPrice: any) => {
    productsData.forEach(product =>{
      if(product.fullName === 'Канистра с бензином'){
        product.price = Math.floor(itemsPrice.gas)
      }
      if(product.fullName === 'Канистра с дизелем'){
        product.price = Math.floor(itemsPrice.diesel)
      }
    })
  }

  useEffect(() => {
    if (sendNotifyReducer.message) {
      sendNotify({ type: sendNotifyReducer.typeNotify, message: sendNotifyReducer.message, timer: sendNotifyReducer.timer })
    }
  }, [sendNotifyReducer, sendNotify])

  useEffect(() => {
    const notify = (value: {type: string, text: string, time: number}) => {
      return sendNotify({type: value.type, message: value.text, timer: value.time})
      
    }
    EventManager.addHandler('notify', notify)
    return () => EventManager.removeHandler( 'notify', notify )
  }, [])

  useEffect (() => {
    const authMain = (value: {type: string}) => {
      dispatch({type: value.type})
    }
    EventManager.addHandler('authMain', authMain);
    return () => EventManager.removeHandler( 'authMain', authMain );
  }, [])

  useEffect (() => {
    const hideAuthMain = (value: {type: string} ) => {
      switch(value.type) {
        case 'hideAuth': 
            dispatch({type: 'HIDE_AUTH'})
            return
        default: return;
      }
  };
  EventManager.addHandler('hideAuthMain', hideAuthMain);
  return () => EventManager.removeHandler( 'hideAuthMain', hideAuthMain );
  }, []);

  useEffect(() =>{
        const showPetrolUi = (value: {type: string, petrolType: 'ltd' | 'ron' | 'xero' | 'Global Oil', vehName: string, vehFuel: number, maxFuelVeh: number, typePetrolVeh: string, price: number, itemsPrice: any}) => {
          switch(value.type){
            case 'petrol': 
              setpetrolIsVisible(true)
              dispatch(showPetrol(value.petrolType, value.vehName, value.vehFuel, value.maxFuelVeh, value.typePetrolVeh))
              getSelectedPrice(value.price);
              getSelectedItemPrice(value.itemsPrice)
              dispatch({type: 'HIDE_HUD'})
            return; 
  
        default: return;
          }
        };
        EventManager.addHandler('showPetrolUi', showPetrolUi);
        return () => EventManager.removeHandler( 'showPetrolUi', showPetrolUi );
    }, []);

    useEffect(() => {
      const showShopPetrolUi = (value: {type: string, petrolType: 'ltd' | 'ron' | 'xero' | 'Global Oil', itemsPrice: any}) => {
        switch(value.type){
          case 'shopPetrol': 
          setpetrolIsVisible(false)
          getSelectedItemPrice(value.itemsPrice)
          dispatch(showPetrol(value.petrolType, 'default', 0, 0, 'default'))
          return; 
      default: return;
        }
      };
      EventManager.addHandler('showShopPetrolUi', showShopPetrolUi);
      return () => EventManager.removeHandler( 'showShopPetrolUi', showShopPetrolUi );
    }, []);

    useEffect(() => {
      const showSelectPlayer = (value: {type: string, personsData: any}) => {
        setPersonData(value.personsData)
        switch(value.type){
          case 'SelectPlayer':
            let onePerson: any;
            let twoPerson: any;
            let threePerson: any;
              value.personsData.forEach((item: any, id: number) => {
                if(id === 0){
                  onePerson = {
                    rp_name: item?.rp_name,
                    lvl: item?.lvl,
                    status: item?.status,
                    cash: item?.cash,
                    bank: item?.bank,
                    fraction: 'Фракция 4'
                };
                }
                if(id === 1){
                  twoPerson = {
                    rp_name: item?.rp_name,
                    lvl: item?.lvl,
                    status: item?.status,
                    cash: item?.cash,
                    bank: item?.bank,
                    fraction: 'Фракция 4'
                };
                }
                if(id === 2){
                  threePerson = {
                    activeDonate: item?.activeDonate,
                    rp_name: item?.rp_name,
                    lvl: item?.lvl,
                    status: item?.status,
                    cash: item?.cash,
                    bank: item?.bank,
                    fraction: 'Фракция 4'
                };
                }  
                  dispatch({type: "SHOW_SELECT_PERSON", onePerson: onePerson, twoPerson: twoPerson, threePerson: threePerson})
            
              })
            return;
        default: return;
        }
      };
      EventManager.addHandler('showSelectPlayer', showSelectPlayer);
      return () => EventManager.removeHandler( 'showSelectPlayer', showSelectPlayer );
    }, []);

    useEffect (() => {
      const showCustomizationDialog = (value: {type: string, selectFreeSlot: string} ) => {
        switch(value.type) {
          case 'customization': 
              dispatch({type: 'SHOW_CREATE_CHAR', selectFreeSlot: value.selectFreeSlot})
              return
          default: return;
        }
    };
    EventManager.addHandler('showCustomizationDialog', showCustomizationDialog);
    return () => EventManager.removeHandler( 'showCustomizationDialog', showCustomizationDialog );
    }, []);

    useEffect(() => {
      const hud = (value: {type: string}) => {
        console.log('загрузка худ')
        if(value.type === 'SHOW_HUD') return dispatch({type: value.type})
        if(value.type === 'HIDE_HUD') return dispatch({type: value.type})
      }
      EventManager.addHandler('hud', hud);
      return () => EventManager.removeHandler( 'hud', hud );
    }, []);

    useEffect(() => {
      const atlRadialMenu = (value: {type: any, fraction: any}) => {
        value.type ? dispatch({type: 'SHOW_INTERACTION_PLAYER', isVisible: value.type, inFraction: true, realtyStatus: true }) : dispatch({type: 'HIDE_INTERACTION_PLAYER'})
      }
      EventManager.addHandler('atlRadialMenu', atlRadialMenu);
      return () => EventManager.removeHandler( 'atlRadialMenu', atlRadialMenu );
    }, [])

    useEffect(() => {
      const showDialog = (value: {type: string, npcName: string, npcStatus: string, dialogText: string, buttons: { text: string, id: string, onClick: () => void }[], position: string, isVisibleRent: boolean}) => {
        value.type === 'SHOW_DIALOG' ? dispatch({
          type: value.type,
          npcName: value.npcName, 
          npcStatus: 
          value.npcStatus,
          dialogText: value.dialogText,
          buttons: value.buttons,
          position: value.position ? value.position : 'BOTTOM_RIGHT',
          isVisibleRent: value.isVisibleRent
        }) : dispatch({type: 'HIDE_DIALOG'})
      }
      EventManager.addHandler('showDialog', showDialog);
      return () => EventManager.removeHandler( 'showDialog', showDialog );
    }, [])

    useEffect(() => {
      const carrent = (value: {type: any}) => {
        setVehRentData(value.type.items)
      }
      EventManager.addHandler('carrent', carrent);
      return () => EventManager.removeHandler( 'carrent', carrent );
    }, [])

  return(
    <>
        {/*{<DonatMenu />}*/}
        { petrolVisible && (<Petrol petrolIsVisible = {petrolIsVisible}/>) }
        { hudVisible && (<HUD />) }
        { dialogVisible && (<DialogMenu vehRentData = {vehRentData}/>) }
        { interactionPlayerVisible && (<InteractionPlayer />) }
        { authVisible && (<Auth />) }
        { selectPersonVisible && (<SelectPerson personData = {personData} />) }
        { createCharVisible && (<CreateChar />) }
        { <IDCard />}
        { <License />}
        { <WorkID />}
        { adminMenuVisible && (<AdminMenu />) }
    </>
  )
}

export default App