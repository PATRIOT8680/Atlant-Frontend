import { FC } from "react";
import { IItem } from "../../../../configs/Donat/cases.data";
import { useNotify } from "../../../../components/Notify/NotificationProvider";
import './assets/styles/compiled-css/ModalCase.css';

import BG_image from './assets/img/ModalCase/background.svg';

interface IModalCase {
  isOpen: boolean;
  onClose: () => void;
  selectedPrize: IItem | null;
  isSpinning: boolean;
}

const ModalCase: FC<IModalCase> = ({ isOpen, onClose, selectedPrize, isSpinning }) => {
  const sendNotify = useNotify();

  if (!isOpen || isSpinning) return null;

  if (!selectedPrize) {
    return null;
  }

  const handleTakePrize = () => {
    onClose();
    sendNotify({ type: 'INFO', message: 'Вы успешно забрали приз в донат - инвентарь', timer: 4000 });
  };

  const handleSellPrize = () => {
    onClose();
    sendNotify({ type: 'SUCCESS', message: `Баланс пополнен на ${selectedPrize.price} AC!`, timer: 4000 });
  };

  return (
    <>
      <div className="window-modal">
        <div className="modal-overley">
          <div className="content-inside">
            <div className="title-block">
              <div className="title">
                <div className="shadow"></div>
                <span className="text">Выигранный приз</span>
              </div>
              <span className="description">Заберите или продайте за ACoins выигранный вами приз</span>
            </div>
            <div className="prize-block">
              <div className="title-prize">
                <span className="name-prize">{selectedPrize.fullName}</span>
                <span className="type-prize" id={selectedPrize.type}>{selectedPrize.type} приз</span>
              </div>
              <div className="image-block">
                <img className="bg-effect" src={BG_image} />
                <img className="img-prize" src={`assets/img/donat/case.items/${selectedPrize.shortName}.png`} />
              </div>
            </div>
            <div className="btns-block">
              <button className="take-prize" onClick={handleTakePrize}>Забрать</button>
              <button className="sell-prize" onClick={handleSellPrize}>Продать • {selectedPrize.price} AC</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalCase;
