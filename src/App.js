import React, { useState } from 'react'

import Header from './main/Header'
import Body from './main/Body'
import Footer from './main/Footer'
import Notifier from './user_feedback/Notifier'

import './App.css'

export default function App() {

  const [detailView, setDetailView] = useState(false)

  const isInDetailView = bool => {
    setDetailView(bool)
  }

  const [notificationVisible, setNotificationVisible] = useState(false);
  const [notification, setNotification] = useState({ type: null, message: null })

  const showNotification = notification => {
    setNotificationVisible(true)
    setNotification(notification)
  }

  const handleNotificationClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setNotificationVisible(false);
  };

  return (
    <main>
      <Header></Header>
      <Body isInDetailView={isInDetailView} showNotification={showNotification}></Body>
      <Footer detailView={detailView} isInDetailView={isInDetailView}></Footer>
      <Notifier open={notificationVisible} notification={notification} handleClose={handleNotificationClose} />
    </main>
  )
}