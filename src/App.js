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

  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  const showSnackbar = () => {
    setSnackbarOpen(true)
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
      <Notifier open={snackbarOpen} handleClose={handleSnackbarClose}/>
    </main>
  )
}