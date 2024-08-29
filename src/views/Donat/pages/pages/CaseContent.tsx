import { FC, useState, useEffect } from "react";
import './assets/styles/compiled-css/CaseContent.css';

import CaseItem from "../components/CaseItem";
import RouletteCase from "../components/RouletteCase";
import ModalCase from "../components/ModalCase";

import { ICasesData, IItem } from "../../../../configs/Donat/cases.data";

interface ICaseContent {
  cases: ICasesData;
}

const CaseContent: FC<ICaseContent> = ({ cases }) => {
  const [selectedPrize, setSelectedPrize] = useState<IItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [spinsCount, setSpinsCount] = useState(0);

  const handleSpinComplete = (item: IItem) => {
    setSelectedPrize(item);
    setIsModalOpen(true);
    setIsSpinning(false);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSpinStart = () => {
    setIsSpinning(true);
  };

  useEffect(() => {
    if (!isModalOpen && spinsCount > 0) {
      setSpinsCount(spinsCount - 1);
      handleSpinStart();
    }
  }, [isModalOpen, spinsCount]);

  return (
    <>
      <div className="case-content">
        <div className="roulette">
          <RouletteCase
            items={cases.items}
            onSpinComplete={handleSpinComplete}
            isModalOpen={isModalOpen}
            onSpinStart={handleSpinStart}
            setSpinsCount={setSpinsCount}
          />
        </div>

        <ModalCase
          isOpen={isModalOpen}
          onClose={handleModalClose}
          selectedPrize={selectedPrize}
          isSpinning={isSpinning}
        />

        <div className="items">
          <span className="title-item">Возможные призы</span>
          <ul className="items-list">
            {cases.items.map((item, index) => (
              <CaseItem item={item} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CaseContent;
