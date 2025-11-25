import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import AppListMain from './components/AppListMain'
import AppFooterList from './components/AppFooterList'
import AppFooterBottom from './components/AppFooterBottom'

function App() {
  return (
    <>
    <AppHeader />
    <AppMain />
    <AppListMain />
    <AppFooterList />
    <AppFooterBottom />
    </>
  )
}

export default App
