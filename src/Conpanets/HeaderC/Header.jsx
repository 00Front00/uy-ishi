import React from 'react'
import "./Header.css"

function Header({sarlovha}) {
  return (
    <div>
      <div className="hlar">
        <h1>{sarlovha}</h1>

      </div>
    </div>
  )
}

export default Header