import { FC } from "react";
import './compiled-css/Switch.css';

import Next_svg from '../assets/img/next.svg';
import Back_svg from '../assets/img/back.svg';

interface ISwitch {
  nameSwitch: string;
  selectedId: number;
  onChange: (newId: number) => void;
  items: { id: number; nameSwitch: string }[];
}

export const Switch: FC<ISwitch> = ({ nameSwitch, selectedId, onChange, items }) => {
  const handlePrev = () => {
    const newId = selectedId === 1 ? items.length : selectedId - 1;
    onChange(newId);
  };

  const handleNext = () => {
    const newId = selectedId === items.length ? 1 : selectedId + 1;
    onChange(newId);
  };

  const currentStyle = items.find(item => item.id === selectedId);

  return (
    <div className='switch'>
      <div className="btn-switch" onClick={handlePrev}><img src={Back_svg} alt="Previous" /></div>
      <span className="info-switch">{currentStyle?.nameSwitch || nameSwitch}</span>
      <div className="btn-switch" onClick={handleNext}><img src={Next_svg} alt="Next" /></div>
    </div>
  );
};