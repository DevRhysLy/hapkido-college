import React from 'react'
import Navbar from './nav'
import '../styles/global.css'
import { graphql, useStaticQuery } from 'gatsby'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        { children }
      </div>
    </div>
  )
}