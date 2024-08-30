import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import NotificationProvider from './components/Notify/NotificationProvider'
import { Provider } from 'react-redux'
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <NotificationProvider>
        <App />
      </NotificationProvider>
    </Provider>
  </React.StrictMode>,
)
