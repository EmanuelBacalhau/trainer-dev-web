'use client'

import { MenuIcon } from 'lucide-react'
import { Sheet, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import { Sidebar } from '../sidebar'
import { getUserLocalStorage } from '@/data/local-storage-manager'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import type { UserLocalStorageData } from '@/data/types/user-localstorage-data.type'

export const Header = () => {
  const [user, setUser] = useState<UserLocalStorageData | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUser(getUserLocalStorage())
    }
  }, [])

  return (
    <header className="sticky top-0 flex items-center justify-between border-b border-solid bg-white p-4">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <Sidebar />
      </Sheet>

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
