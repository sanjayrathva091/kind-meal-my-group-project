import {useAuth0} from '@auth0/auth0-react';
import React from 'react'

const Logout = () => {
  const {logout, isAuthenticated} = useAuth0();
  return (
    isAuthenticated &&(
    <button onClick={()=> logout()}>
      LOGOUT
    </button>
    )
  )
}

export default Logout
