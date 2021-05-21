import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
  return (
    <nav>
      <h1>{ "(title here)" }</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about-us">About</Link>
      </div>
    </nav>
  )
}