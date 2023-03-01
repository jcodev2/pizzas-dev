import useUser from 'hooks/useUser'
import Image from 'next/image'
import UserSVG from './svg/UserSVG'

const User = () => {
  const { user } = useUser()

  return (
    <>
      {user ? (
        <Image
          src={user.user_metadata.avatar_url}
          alt='user avatar'
          width={40}
          height={40}
          priority
        />
      ) : (
        <UserSVG />
      )}
    </>
  )
}

export default User
