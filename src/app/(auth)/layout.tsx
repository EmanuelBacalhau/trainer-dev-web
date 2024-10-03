'use client'

import { Header } from '@/components/header'
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
    router.push('/')

    if (typeof window !== 'undefined') {
      removeUserLocalStorage()
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <Header />

      {children}
    </div>
  )
}
export default AuthLayout
