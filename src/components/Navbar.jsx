import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Let's Chat</span>
      <div className="user">
        <img src="https://img.icons8.com/?size=512&id=AjTPlMclWxjF&format=png" alt="" />
        <span>Prakalp</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar