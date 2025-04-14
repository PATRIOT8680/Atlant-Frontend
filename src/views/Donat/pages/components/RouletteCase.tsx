import { FC, useState, useRef, useEffect } from "react";
import { IItem } from "../../../../configs/Donat/cases.data";
import "./assets/styles/compiled-css/RouletteCase.css";

interface IRouletteCase {
  items: IItem[];
  onSpinComplete: (item: IItem) => void;
  isModalOpen: boolean;
  onSpinStart: () => void;
  setSpinsCount: (count: number) => void;
}

interface IAmountScrolls {
  amount: number;
}

const RouletteCase: FC<IRouletteCase> = ({
  items,
  onSpinComplete,
  isModalOpen,
  onSpinStart,
  setSpinsCount,
}) => {
  const [shuffledItems, setShuffledItems] = useState<IItem[]>([]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number>(1);
  const [spinCount, setSpinCount] = useState(0);
  const [isFastSpin, setIsFastSpin] = useState(false);
  const rouletteRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);


  const shuffleItems = (items: IItem[]) => {
    const shuffledArray: IItem[] = [...items];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };


  const getCaseArray = () => {
    const shuffledItemsArray: IItem[] = shuffleItems(items);

    const chance: { [key: string]: number } = {
      'Обычный': 80,
      'Редкий': 15,
      'Легендарный': 5,
    };

    Object.keys(chance).forEach((type) => {
      const itemsOfType = items.filter((item) => item.type === type);
      const numItems = Math.floor((chance[type] / 100) * items.length);
      for (let i = 0; i < numItems; i++) {
        shuffledItemsArray.push(...itemsOfType);
      }
    });

    setShuffledItems(shuffledItemsArray);
    return shuffledItemsArray; 
  };


  useEffect(() => {
    getCaseArray();
  }, []);

  const handleIsSpinning =  () => {
    if (isSpinning || isModalOpen) return;
    
    onSpinStart();
    setIsSpinning(true);
    setSpinCount(selectedAmount);
    setSpinsCount(selectedAmount);

    const spinRoulette = () => {
      const shuffledItemsArray: IItem[] = shuffleItems(items);

      const chance: { [key: string]: number } = {
        'Обычный': 80,
        'Редкий': 15,
        'Легендарный': 5,
      };
      Object.keys(chance).forEach((type) => {
        const itemsOfType = items.filter((item) => item.type === type);
        const numItems = Math.floor((chance[type] / 100) * items.length);
        for (let i = 0; i < numItems; i++) {
          shuffledItemsArray.push(...itemsOfType);
        }
      });

      for (let i = shuffledItemsArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledItemsArray[i], shuffledItemsArray[j]] = [shuffledItemsArray[j], shuffledItemsArray[i]];
      }

      setShuffledItems(shuffledItemsArray);

      const randomItemID = Math.floor(Math.random() * shuffledItemsArray.length);
      const randomItem = shuffledItemsArray[randomItemID];


        const rouletteContainer = rouletteRef.current;
        const container = containerRef.current
        const item = itemRef.current
        const arrow = arrowRef.current
        
        if (!rouletteContainer || !container || !item || !arrow) return;
        

        // Прокрутка
        const rouletteWidth = rouletteContainer.scrollWidth
        const itemsInView = container.clientWidth
        

        const itemWidth = item.clientWidth ; // Ширина каждого элемента в пикселях
        const realItemWidth = Math.floor((rouletteWidth - (shuffledItemsArray.length * itemWidth))/(shuffledItemsArray.length + 1))
        const result = randomItemID * (itemWidth + realItemWidth)
        
      
        rouletteContainer.style.transform = `translateX(${-result  + (itemsInView/2) - 113}px)`; 
        rouletteContainer.style.transition = "transform 3s ease-out";

        setTimeout(() => {
          onSpinComplete(randomItem);
          setSpinCount((prevCount) => prevCount - 1);
    
          if (spinCount > 0) {
            spinRoulette();
          } else {
            setIsSpinning(false);
          }
        }, 3000);
    }
    spinRoulette();
  };


  const amountScrolls: IAmountScrolls[] = [
    { amount: 1 },
    { amount: 2 },
    { amount: 3 },
    { amount: 4 },
    { amount: 5 },
  ];

  const handleAmount = (item: IAmountScrolls) => {
    setSelectedAmount(item.amount);
  };

  const handleFastSpin = () => {
    setIsFastSpin(!isFastSpin);
  };

  
  
  return (
    <>
      <div className="roulette-container" ref={containerRef}>
        <div className="roulette-arrow" ref={arrowRef}>
          <svg
            width="20"
            height="48"
            viewBox="0 0 20 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.11747 2.14852C7.3094 0.912045 8.37395 0 9.62523 0C10.8612 0 11.9175 0.890458 12.1265 2.10866L20 48H0L7.11747 2.14852Z"
              fill="#49F483"
            />
          </svg>
        </div>
        <div className="roulette" ref={rouletteRef}>
          {shuffledItems.map((item, index) => (
            <div
              key={index}
              ref={itemRef}
              className="roulette-item"
              /* style={{ width: "100px", flex: "0 0 15vw" }} */
              data-id = {index}
              id={item.type}
            >
              <div className="content-inside">
                <span className="name-prise">{item.fullName}</span>
                <div className="img-block">
                  <div className="effect"></div>
                  <img
                    className="item-img"
                    src={`/assets/img/donat/case.items/${item.shortName}.png`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bottom-content">
        <div className="amount-scrolls">
          <span className="title">Количество кейсов</span>
          <ul className="list-amounts">
            {amountScrolls.map((amount) => (
              <li
                className={`amount ${selectedAmount === amount.amount ? "selected" : ""}`}
                key={amount.amount}
                onClick={() => handleAmount(amount)}
              >
                {amount.amount}
              </li>
            ))}
          </ul>
        </div>
        <button
          className={`scroll-roulette ${isSpinning ? "spinned" : ""}`}
          onClick={handleIsSpinning}
          disabled={isSpinning}
        >
          {isSpinning ? <span className="isSpinning">Подождите...</span> : "Купить прокрутку!"}
        </button>
        <div className="fast-spin">
          <div className="switch" onClick={handleFastSpin}>
            <input
              type="checkbox"
              className="toogle"
              checked={isFastSpin}
              onChange={handleFastSpin}
            />
            <span className="slider"></span>
          </div>
          <span className="title">Открыть быстро</span>
        </div>
      </div>
    </>
  );
};

export default RouletteCase;
