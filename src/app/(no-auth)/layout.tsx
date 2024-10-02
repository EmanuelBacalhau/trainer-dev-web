'use client'

import { getUserLocalStorage } from '@/data/local-storage-manager'
import { useRouter } from 'next/navigation'
import { parseCookies } from 'nookies'

interface NoAuthLayoutProps {
  children: React.ReactNode
}

const NoAuthLayout = ({ children }: NoAuthLayoutProps) => {
  const token = parseCookies()[process.env.NEXT_PUBLIC_TOKEN as string]
  let user = null

  if (typeof window !== 'undefined') {
    user = getUserLocalStorage()
  }

  const router = useRouter()

  if (token && user) {
    switch (user.role) {
      case 'ADMIN':
        router.push('/admin/dashboard')
        break
      case 'TRAINER':
        router.push('/trainer/dashboard')
        break
      default:
        router.push('/dashboard')
        break
    }
  }

  return <div className="h-full">{children}</div>
}
export default NoAuthLayout
