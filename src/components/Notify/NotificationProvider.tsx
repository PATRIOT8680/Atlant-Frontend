import { createContext, Dispatch, ReactNode, FC, useReducer, useContext } from "react"
import { v4 } from 'uuid'
import '../assets/styles/compiled-css/Notification.css'

import Notification from "./Notification"

interface INotificationState {
  id: string,
  type: 'SUCCESS' | 'ERROR' | 'WARNING' | 'INFO',
  message: string,
  timer: number
}

interface IAddNotify {
  type: 'ADD_NOTIFY',
  payload: INotificationState
}

interface IRemoveNotify {
  type: 'REMOVE_NOTIFY',
  id: string
}

type NotifyAction = IAddNotify | IRemoveNotify

const NotificationContext = createContext<Dispatch<NotifyAction> | null>(null)

const NotificationProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer((state: INotificationState | null, action: NotifyAction) => 
    {
      switch (action.type) {
        case "ADD_NOTIFY":
          return { ...action.payload };
        case "REMOVE_NOTIFY":
          return null;
        default:
          return state;
      }
    }, null);

  return(
    <>
      <NotificationContext.Provider value={dispatch}>
        <div className="notification-wrapper">
          {state && <Notification dispatch={dispatch} key={state.id} {...state} />}
        </div>
        {children}
      </NotificationContext.Provider>
    </>
  )
}

export const useNotify = () => {
  const dispatch = useContext(NotificationContext)

  if (!dispatch) {
    throw new Error("useNotification должен использоваться внутри NotificationProvider!");
  }

  const addNotification = (props: Pick<INotificationState, 'type' | 'message' | 'timer'>) => {
    dispatch({
      type: 'ADD_NOTIFY',
      payload: {
        id: v4(),
        timer: props.timer || 5000,
        type: props.type,
        message: props.message
      },
    })
  }

  return addNotification
}

export default NotificationProvider