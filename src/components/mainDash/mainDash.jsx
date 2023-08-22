import React from 'react'
import Cards from '../Cards/Cards'
import './mainDash.css'
import Table from '../Table/Table'
const mainDash = () => {
  return (
    <div className="mainDash">
        <h1>Dashboard</h1>
        <Cards/>
        <Table/>
    </div>
  )
}

export default mainDash