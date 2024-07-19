import { useState, useEffect } from 'react'
import { getUserById } from '@/services/user'
import { useAuth } from '@/hooks/use-auth'

const initUserProfile = {
  name: '',
  email: '',
  mobile: '',
  birthday: '',
  gender: '',
  address: '',
  avatar: '',
}

export function useMemberData() {
  const [userProfile, setUserProfile] = useState(initUserProfile)
  const { auth } = useAuth()

  const getUserData = async (id) => {
    const res = await getUserById(id)

    if (res.data.status === 'success') {
      const dbUser = res.data.data.user
      const dbUserProfile = { ...initUserProfile }

      for (const key in dbUserProfile) {
        if (dbUser.hasOwnProperty(key)) {
          dbUserProfile[key] = dbUser[key] || ''
        }
      }

      setUserProfile(dbUserProfile)
    }
  }

  useEffect(() => {
    if (auth.isAuth) {
      getUserData(auth.userData.id)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.isAuth])

  return userProfile
}
