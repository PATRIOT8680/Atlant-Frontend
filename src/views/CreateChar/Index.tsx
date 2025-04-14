import { useState } from "react";
import './assets/styles/compiled-css/Index.css'

import {NavigationCreateChar} from "./components/Navigation.tsx";
import RightContainer from "./components/RightContainer.tsx";
import NameCharacter from "./components/NameCharacter.tsx";
import LastTab from "./components/LastTab.tsx";

const CreateChar = () => {
  const [selectedTab, setSelectedTab] = useState<string>('gen')
  const [showMain, setShowMain] = useState<boolean>(false)
  const [showLastTab, setLastTab] = useState<boolean>(false)

  return(
    <>
      <div className="create-char">
        <NameCharacter setShowMain = {setShowMain}/>
        {showMain && (<NavigationCreateChar selectedTab={selectedTab} onTabChange={setSelectedTab} />)}
        {showMain && (<RightContainer selectedTab={selectedTab} setShowMain = {setShowMain} setLastTab = {setLastTab} />)}
        {showLastTab && (<LastTab setLastTab = {setLastTab}/>)}
      </div>
    </>
  )
}

export default CreateChar;