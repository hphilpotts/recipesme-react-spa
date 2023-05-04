import React, { useState } from 'react'

import Header from './main/Header'
import Body from './main/Body'
import Footer from './main/Footer'

import './App.css'

export default function App() {

  const [detailView, setDetailView] = useState(false)

  const isInDetailView = bool => {
    setDetailView(bool)
  }

  return (
    <main>
      <Header></Header>
      <Body isInDetailView={isInDetailView}></Body>
      <Footer detailView={detailView} isInDetailView={isInDetailView}></Footer>
    </main>
  )
}