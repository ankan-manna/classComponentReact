import React from 'react'

function HandelUser({user}) {
  return (
    <div>
      <p>I am {user.name}, i am {user.age} years old. i know {user.skill}</p>
    </div>
  )
}

export default HandelUser
