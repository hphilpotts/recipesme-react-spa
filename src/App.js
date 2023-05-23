import React, { useState } from 'react'

import Header from './main/Header'
import Body from './main/Body'
import Footer from './main/Footer'
import Notifier from './snackbar/Notifier'

import './App.css'

export default function App() {

  const [detailView, setDetailView] = useState(false)

  const isInDetailView = bool => {
    setDetailView(bool)
  }

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const [snackbarNotification, setSnackbarNotification] = useState({ type: null, message: null })

  const showSnackbar = notification => {
    setSnackbarOpen(true)
    setSnackbarNotification(notification)
  }

  const handleSnackbarClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarOpen(false);
  };

  return (
    <main>
      <Header></Header>
      <Body isInDetailView={isInDetailView} showSnackbar={showSnackbar}></Body>
      <Footer detailView={detailView} isInDetailView={isInDetailView}></Footer>
      <Notifier open={snackbarOpen} notification={snackbarNotification} handleClose={handleSnackbarClose} />
    </main>
  )
}