import { FC, useRef, useState, useEffect } from "react"

interface INotification {
  id: string,
  type: string,
  message: string,
  dispatch: React.Dispatch<{ type: "REMOVE_NOTIFY"; id: string }>,
  timer: number
}

const Notification: FC<INotification> = ({id, type, message, dispatch, timer}) => {
  const [exit, setExit] = useState(false)
  const [timerRunning, setTimerRunning] = useState(true)
  const intervalID = useRef<number | undefined>(undefined)
  const exitTimeout = useRef<number | undefined>(undefined)

  useEffect(() => {
    if (timerRunning) {
      intervalID.current = setInterval(() => {
        exitTimeout.current = setTimeout(() => {
          dispatch({ type: 'REMOVE_NOTIFY', id })
        }, 500)
        setExit(true)
      }, timer)
    }

    return () => {
      clearInterval(intervalID.current)
      clearTimeout(exitTimeout.current)
    }
  }, [timer, dispatch, id, timerRunning])

  const handleStartTimer = () => {
    setTimerRunning(true)
  }

  const handleStopTimer = () => {
    setTimerRunning(false)
  }

  const handleCloseNotify = () => {
    setExit(true)
    setTimeout(() => {
      dispatch({ type: 'REMOVE_NOTIFY', id })
    }, 500)
  }

  return(
    <>
       <div
        onMouseEnter={handleStopTimer} 
        onMouseLeave={handleStartTimer}
        onClick={handleCloseNotify}
        className={`notification-item ${exit ? 'exit' : ''}`} id={type.toLowerCase()}>
        <img className="icon" src={`assets/img/components/Notify/${type.toLowerCase()}.svg`} />
        <span className="message">{message}</span>
      </div>
    </>
  )
}

export default Notification