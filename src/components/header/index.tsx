'use client'

import { MenuIcon } from 'lucide-react'
import { Sheet, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import { Sidebar } from '../sidebar'
import { getUserLocalStorage } from '@/data/local-storage-manager'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import type { UserLocalStorageData } from '@/data/types/user-localstorage-data.type'
import { navs } from '@/constants/navs'
import Link from 'next/link'

export const Header = () => {
  const [user, setUser] = useState<UserLocalStorageData | null>(null)
  const userNavs = navs[user?.role.toLocaleLowerCase() as keyof typeof navs]

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUser(getUserLocalStorage())
    }
  }, [])

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-solid bg-background p-4">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="xl:hidden">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <Sidebar />
      </Sheet>

      <h1 className="hidden text-center text-2xl font-bold xl:block">
        trainer<span className="text-primary">.dev</span>
      </h1>

      <div className="hidden items-center gap-4 xl:flex">
        {userNavs?.map((nav, index) => (
          <Button key={index} variant="ghost" className="text-base" asChild>
            <Link href={nav.href}>{nav.label}</Link>
          </Button>
        ))}
      </div>

      {user && user.avatar && (
        <Image
          src={user.avatar}
          alt={user.name}
          width={40}
          height={40}
          className="rounded-full"
        />
      )}

      {user && user.name && !user.avatar && (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-400 font-bold text-white">
          {user.name.slice(0, 2).toLocaleUpperCase()}
        </div>
      )}
    </header>
  )
}
