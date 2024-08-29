import '../assets/styles/compiled-css/Help.css'

const Help = () => {
  return(
    <>
      <div className="help">
        <ul className="help-list">
          <li className="key">
            <span className="text">Чат</span>
            <span className="btn">T</span>
          </li>
          <li className="key">
            <span className="text">Телефон</span>
            <span className="btn">^</span>
          </li>
          <li className="key">
            <span className="text">Меню игрока</span>
            <span className="btn">M</span>
          </li>
          <li className="key">
            <span className="text">Инвентарь игрока</span>
            <span className="btn">I</span>
          </li>
          <li className="key">
            <span className="text">Донат - меню</span>
            <span className="btn">TAB</span>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Help