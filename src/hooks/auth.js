import { useState, useEffect } from 'react'
 
import { signOut, onAuthStateChanged } from 'firebase/auth'

import { auth } from '../config/firebase'

export function useAuthentication() {
  const [user, setUser] = useState()

  useEffect(() => {
    const unsubscribeFromAuthStatuChanged = onAuthStateChanged(auth, user => {
      if (user && user.emailVerified) {
        setUser(user)
      } else {
        setUser(null)
      }
    })

    return unsubscribeFromAuthStatuChanged;
  }, [])

  return {
    user,
    signOut: async () => await signOut(auth)
  }
}