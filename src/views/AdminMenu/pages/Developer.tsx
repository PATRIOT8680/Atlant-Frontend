import { useState, useEffect } from 'react';
import './assets/styles/compiled-css/Developer.css';
import { useModal } from '../hooks/useModal';

interface SubSubButton {
  shortName: string;
  fullName: string;
  action: () => void;
}

interface SubButton {
  shortName: string;
  fullName: string;
  action?: () => void;
  subSubButtons?: SubSubButton[];
}

interface Button {
  shortName: string;
  fullName: string;
  action?: () => void;
  subButtons?: SubButton[];
}

const Developer: React.FC = () => {
  const { handleModalOpen, ModalComponent } = useModal();

  const btnsData: Button[] = [
    {
      shortName: 'saveAllAccounts',
      fullName: 'Сохранить все аккаунты',
      action: () => mp.trigger('cef:adminMenu:dev:saveAllAccounts'),
    },
    {
      shortName: 'saveAll',
      fullName: 'Сохранить всё',
      action: () => mp.trigger('cef:adminMenu:dev:saveAll'),
    },
    {
      shortName: 'interiorManager1',
      fullName: 'Управление интерьерами',
      subButtons: [
        {
          shortName: 'arcadius1',
          fullName: 'Аркадиус',
          action: function() {
            mp.trigger(`cef:adminMenu:dev:interiorManager:${this.shortName}`);
          },
        },
      ],
    },
    {
      shortName: 'interiorManager2',
      fullName: 'Управление интерьерами 23',
      subButtons: [
        {
          shortName: 'arcadius23',
          fullName: 'Аркадиусиммсм',
          subSubButtons: [
            {
              shortName: 'tp_tos',
              fullName: 'Телепорт во внутрь',
              action: () => handleModalOpen('Test', `dev:interior:arcadius:tp_to`, [{ name: 'Test input' }], 'Set'),
            },
          ],
        },
      ],
    },
  ];

  const [activeMenu, setActiveMenu] = useState<{ button: Button; subButton?: SubButton | null } | null>(null);
  const [previousMenu, setPreviousMenu] = useState<{ button: Button; subButton?: SubButton | null } | null>(null);

  const handleBtnClick = (btn: Button) => {
    if (btn.action) {
      btn.action();
    }

    if (btn.subButtons) {
      setPreviousMenu(activeMenu);
      setActiveMenu({ button: btn, subButton: null });
    } else {
      setActiveMenu({ button: btn, subButton: null });
    }
  };

  const handleSubBtnClick = (subBtn: SubButton) => {
    if (subBtn.action) {
      subBtn.action();
    }

    if (subBtn.subSubButtons) {
      setPreviousMenu(activeMenu);
      setActiveMenu({ button: activeMenu!.button, subButton: subBtn })
    } else {
      setActiveMenu({ button: activeMenu!.button, subButton: null })
    }
  };

  const handleBackClick = () => {
    setActiveMenu(previousMenu);
    setPreviousMenu(null)
  };

  return (
    <>
      <div className="developer">
        <div className="header">
          <span className="name">Разработчикам</span>
          {activeMenu && (
            <button onClick={handleBackClick} className="back-button">
              Назад
            </button>
          )}
        </div>
        <div className="bottom-block">
          {activeMenu ? (
            <>
              {activeMenu.subButton ? (
                <>
                  {activeMenu.subButton.subSubButtons && activeMenu.subButton.subSubButtons.map((subSubButton, subSubIndex) => (
                    <button className='btn-from-list' key={subSubIndex} onClick={subSubButton.action}>
                      {subSubButton.fullName}
                    </button>
                  ))}
                </>
              ) : (
                activeMenu.button.subButtons && activeMenu.button.subButtons.map((subBtn, subIndex) => (
                  <button key={subIndex} className='btn-from-list' onClick={() => handleSubBtnClick(subBtn)}>
                    {subBtn.fullName}
                  </button>
                ))
              )}
            </>
          ) : (
            btnsData.map((btn, index) => (
              <button key={index} className='btn-from-list' onClick={() => handleBtnClick(btn)}>
                {btn.fullName}
              </button>
            ))
          )}
        </div>
      </div>

      {ModalComponent}
    </>
  );
};

export default Developer;