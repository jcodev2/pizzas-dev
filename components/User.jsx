import useUser from 'hooks/useUser'
import Image from 'next/image'
import Link from 'next/link'
import UserSVG from './svg/UserSVG'

const User = () => {
  const { user } = useUser()

  return (
    <>
      {user ? (
        <Link href='/account'>
          <Image
            src={user.user_metadata.avatar_url}
            alt='user avatar'
            width={40}
            height={40}
            priority
          />
        </Link>
      ) : (
        <UserSVG />
      )}
    </>
  )
}

export default User
