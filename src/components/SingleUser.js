import React from 'react'

const User = ( {user} ) => {
  return (
    <div className='user-card'>
        <img src={user.picture.large} alt="user-pic" />
        <div className="user-info">
          <h3> {user.name.first} {user.name.last}</h3>
          <h5>E-Mail: {user.email} </h5>
          <p> {user.location.country} - {user.location.city} </p>
        </div>
    </div>
  )
}

export default User