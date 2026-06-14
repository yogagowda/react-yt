import React from 'react'
import Card from './components/card'

export default function App() {
  return (
    <div className='parent'>
      <Card user="yoga" age={30} address="mandya" img='https://images.unsplash.com/photo-1780511440982-f891d05bf7c6?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <Card user="naga" age={28} address="bengloure" img='https://images.unsplash.com/photo-1780833546253-7216b5f3986e?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""' />
    </div>
  )
}
