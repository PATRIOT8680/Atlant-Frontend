import { useState } from "react";
import './assets/styles/compiled-css/Index.css'

import {NavigationCreateChar} from "./components/Navigation.tsx";
import RightContainer from "./components/RightContainer.tsx";

const CreateChar = () => {
  const [selectedTab, setSelectedTab] = useState<string>('gen')

  return(
    <>
      <div className="create-char">
        <NavigationCreateChar selectedTab={selectedTab} onTabChange={setSelectedTab} />
        <RightContainer selectedTab={selectedTab} />
      </div>
    </>
  )
}

export default CreateChar;