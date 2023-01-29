import Link from 'next/link'
import { useRouter } from 'next/router'

const MyLink = ({ href, children }) => {
  const router = useRouter()
  const isActived = router.pathname === href

  return (
    <Link href={href} className={isActived ? 'active' : ''}>
      {children}
    </Link>
  )
}

export default MyLink
