'use client'

import { removeUserLocalStorage } from '@/data/local-storage-manager'
import { useRouter } from 'next/navigation'
import { parseCookies } from 'nookies'

interface NoAuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout = ({ children }: NoAuthLayoutProps) => {
  const token = parseCookies()[process.env.NEXT_PUBLIC_TOKEN as string]
  const router = useRouter()

  if (!token) {
    if (typeof window !== 'undefined') {
      removeUserLocalStorage()
    }
    router.push('/')
  }

  return <div className="h-full">{children}</div>
}
export default AuthLayout
