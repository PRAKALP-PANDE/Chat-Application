import React from 'react'

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder='Find a users' />
      </div>
      <div className="userChat">
        <img src="https://img.icons8.com/?size=512&id=AjTPlMclWxjF&format=png" alt="" />
        <div className="userChatInfo">
          <span>Prakalp</span>
        </div>
      </div>
    </div>
  )
}

export default Search