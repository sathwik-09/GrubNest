import React, { createContext } from 'react'

const UserContext = createContext({
  loginUser : "default user",
})

export default UserContext;