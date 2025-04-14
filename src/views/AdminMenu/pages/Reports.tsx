import { useState, useRef, useEffect, KeyboardEvent } from "react"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../../reducer/rootReducer"
import './assets/styles/compiled-css/Reports.css'

import { updateReportStatus, updaterReportResponder, addMessageToReport, closeReport } from "../../../actions/elements/adminMenu/report"

import notFoundReports from './assets/img/Reports/notFound.svg'
import notSelectedReport from './assets/img/Reports/notSelected.svg'
import svg_user from './assets/img/Reports/user.svg'
import svg_admin from './assets/img/Reports/admin.svg'

export interface IMsg {
  nickName: string,
  text: string,
  dateTime: string,
  role: 'player' | 'admin'
}

export interface Reports {
  id: number,
  listMsg: IMsg[],
  status: 'waiting' | 'reviewed',
  responder: string | null
}

const Reports = () => {
  const [selectedReport, setSelectedReport] = useState<number | null>(null)
  const [sendMsg, setSendMsg] = useState<string>('')
  const [formattedTime, setFormattedTime] = useState<string>('')
  const reports = useSelector((state: RootState) => state.reportReducer.reports)
  const adminNickname = useSelector((state: RootState) => state.adminMenuReducer.adminNickname)
  const numberReports = reports.length
  const dispatch = useDispatch()

  const listChatRef = useRef<HTMLUListElement | null>(null)
  const selectedReportData = selectedReport !== null ? reports.find(report => report.id === selectedReport) : null

  const handleItemReport = (id: number) => {
    // Здесь нам надо отправить еще на клиент уведомление (какой админ принял репорт) игроку, который отправил репорт 
    setSelectedReport(id)
    dispatch(updaterReportResponder(id, adminNickname))
    dispatch(updateReportStatus(id, 'reviewed', adminNickname))
  }

  const handleSendMsgReport = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && sendMsg.trim() !== '') {
      const newMsg: IMsg = {
        nickName: adminNickname,
        text: sendMsg,
        dateTime: formattedTime,
        role: 'admin'
      }


      dispatch(addMessageToReport(selectedReportData.id, newMsg))
      setSendMsg('')
    }
  }

  const handleDelayReport = () => {
    setSelectedReport(null)
    dispatch(updaterReportResponder(selectedReportData.id, null))
    dispatch(updateReportStatus(selectedReportData.id, 'waiting', null))
  }

  const handleCloseReport = () => {
    if (selectedReport !== null) {
      dispatch(closeReport(selectedReport))
      setSelectedReport(null)
    }
  }

  useEffect(() => {
    if (listChatRef.current) {
      listChatRef.current.scrollTop = listChatRef.current.scrollHeight
    }
  }, [selectedReportData])
  
  useEffect(() => {
    const fetchTime = async () => {
      try {
        const apiKey = 'KNICB5NO1LLX';
        const response = await fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=zone&zone=Europe/Moscow`);
        const data = await response.json();
        
        const dateTimeString = data.formatted;
        const date = new Date(dateTimeString);

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        setFormattedTime(`${day}.${month}.${year} - ${hours}:${minutes}:${seconds}`);
      } catch (error) {
        console.error("Ошибка при получении времени:", error);
      }
    };

    fetchTime();
  }, []);


  return(
    <>
      <div className="reports">
        <div className="header">
          <span className="name">Список репортов</span>
          <span className="number-reports">{numberReports}</span>
        </div>
        <div className="bottom-blocks">
          <div className="list-reports">
            { numberReports > 0 ? (
              reports.map((report) => (
                <div className={`report-item ${report.id === selectedReport ? `selected` : ''}`} key={report.id} onClick={() => handleItemReport(report.id)}>
                  <div className="header-report">
                    <span className="number-report">Обращение №{report.id} от {report.listMsg[0].nickName}</span>
                    <span className={`status ${report.status}`}>{report.status === 'waiting' ? 'Ожидает ответа' : `Рассматривает ${report.responder}`} <ellipse></ellipse></span>
                  </div>
                  <span className="msg">{report.listMsg[0].text.length > 120 ? `${report.listMsg[0].text.slice(0, 120)}...` : `${report.listMsg[0].text}`}</span>
                  <div className="info">
                    <span>{report.listMsg[0].dateTime}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="notFound-reports">
                <img src={notFoundReports} className="icon" />
                <span className="text">Репортов не найдено!</span>
                <span className="descr">Ожидайте новых репортов от игроков, чтобы им помочь.</span>
              </div>
            ) }
          </div>
          <div className="chat-report">
            { selectedReportData ? (
              <div className="selected-report">
                <div className="header-sel-rep">
                  <span className="number-report">Обращение №{selectedReportData.id} <span>от {selectedReportData.listMsg[0].nickName}</span></span>
                  <div className="btns">
                    <button className="back-report" onClick={handleDelayReport}>Отложить</button>
                    <button className="close-report" onClick={handleCloseReport}>Закрыть репорт</button>
                  </div>
                </div>
                <hr style={{ width: '100%', opacity: '0.15' }} />

                <ul className="list-chat" ref={listChatRef}>
                  { selectedReportData.listMsg
                      .slice()
                      .sort((a: IMsg, b: IMsg) => {
                        const aTime = a.dateTime.replace(/[-: ]/g, '')
                        const bTime = b.dateTime.replace(/[-: ]/g, '')
                        return aTime.localeCompare(bTime)
                      })
                      .map((msg: any) => (
                        <div className={`${msg.role}-msg`}>
                          <img src={msg.role === 'player' ? svg_user : svg_admin} className="avatar" />
                          <div className="main-info">
                            <div className="header-msg">
                              <span className="nickname">{msg.nickName}</span>
                              <span className="date-time">{msg.dateTime}</span>
                            </div>
                            <span className="msg-report">{msg.text}</span>
                          </div>
                        </div>
                  )) }
                </ul>

                <input type="text" className="send-msg" 
                  placeholder="Введите сообщение..."
                  value={sendMsg}
                  onChange={(e) => setSendMsg(e.target.value)}
                  onKeyDown={handleSendMsgReport}
                />

                
              </div>
            ) : (
              <div className="notSelected-report">
                <img src={notSelectedReport} className="icon" />
                <span className="text">Выберите репорт!</span>
                <span className="descr">Чтобы помочь игроку, выберет слева в списке репорт</span>
              </div>
            ) }
          </div>
        </div>
      </div>
    </>
  )
}

export default Reports