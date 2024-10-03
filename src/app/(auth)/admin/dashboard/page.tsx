'use client'

import { ChartLine } from '@/components/chart-line'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { api } from '@/data/api'
import type { CountDataType } from '@/data/types/count-data.type'
import type { User } from '@/data/types/user.type'
import {
  MonitorPlayIcon,
  PresentationIcon,
  PuzzleIcon,
  UserIcon,
} from 'lucide-react'
import Image from 'next/image'
import { parseCookies } from 'nookies'
import { useEffect, useState } from 'react'

const DashboardPage = () => {
  const token = parseCookies()[process.env.NEXT_PUBLIC_TOKEN as string]
  const [isLoading, setIsLoading] = useState(true)
  const [dataCount, setDataCount] = useState<CountDataType[]>([])
  const [quantitiesData] = useState([
    {
      title: 'Usuários',
      quantity: 100,
      icon: <UserIcon className="h-10 w-10 lg:h-14 lg:w-14" />,
    },
    {
      title: 'Trilhas',
      quantity: 100,
      icon: <MonitorPlayIcon className="h-10 w-10 lg:h-14 lg:w-14" />,
    },
    {
      title: 'Módulos',
      quantity: 150,
      icon: <PuzzleIcon className="h-10 w-10 lg:h-14 lg:w-14" />,
    },
    {
      title: 'Aulas',
      quantity: 1000,
      icon: <PresentationIcon className="h-10 w-10 lg:h-14 lg:w-14" />,
    },
  ])
  const [users, setUsers] = useState<User[]>([])

  const fetchDataCount = async () => {
    const response = await api('/users/count-users-last-6-months', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (response.status === 401) {
      return
    }

    const data = await response.json()
    setDataCount(data as CountDataType[])
  }

  const fetchUsers = async () => {
    const response = await api('/users/list-users-last-created', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (response.status === 401) {
      return
    }

    const data = await response.json()

    setUsers(data)
  }

  useEffect(() => {
    Promise.all([fetchDataCount(), fetchUsers()])
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false))
  }, [])

  return (
    <main className="flex flex-col space-y-5 px-5 pb-5">
      <section className="space-y-5">
        {isLoading ? (
          <Skeleton className="h-24 w-full" />
        ) : (
          <div className="flex w-full flex-wrap items-center gap-3 lg:gap-5 lg:text-xl">
            {quantitiesData.map((data, index) => (
              <div
                key={index}
                className="flex w-full flex-1 items-center justify-center gap-5 rounded-md border border-solid p-2 lg:p-4"
              >
                <span className="font-semibold">
                  {data.title} <br /> {data.quantity}
                </span>
                {data.icon}
              </div>
            ))}
          </div>
        )}

        {isLoading ? (
          <Skeleton className="h-96 w-full" />
        ) : (
          <div className="flex max-h-[430px] flex-col gap-5 lg:grid lg:grid-cols-3">
            <ChartLine
              title={`${dataCount[0]?.month.toLowerCase()} - ${dataCount[dataCount.length - 1]?.month.toLowerCase()}`}
              data={dataCount}
              config={{
                quantity: {
                  label: 'Usuários',
                },
              }}
              textFooter="Mostrando o total de usuários cadastrados nos últimos 6 meses"
            />

            <Card className="flex flex-col justify-between">
              <div>
                <CardHeader>
                  <CardTitle>Usuários recentes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {users?.map((user) => (
                    <div
                      key={user.id}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4">
                        {!user.avatar ? (
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-400 font-bold text-white">
                            {user.name.slice(0, 2).toLocaleUpperCase()}
                          </div>
                        ) : (
                          <Image
                            src={user.avatar}
                            alt="Foto perfil"
                            width={50}
                            height={50}
                            className="h-12 w-12 rounded-full object-cover"
                          />
                        )}
                        <div className="flex flex-col text-sm">
                          <span>
                            {user.name.split(' ').slice(0, 2).join(' ')}
                          </span>
                          <span className="text-gray-400">02-10-2024</span>
                        </div>
                      </div>

                      <span className="text-sm capitalize">
                        {user.role.toLocaleLowerCase()}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </div>
              <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="leading-none text-muted-foreground">
                  Mostrando os {users.length} últimos cadastrados
                </div>
              </CardFooter>
            </Card>

            <Card className="flex flex-col justify-between">
              <div>
                <CardHeader>
                  <CardTitle>Módulos recentes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-4">
                    <Image
                      src="https://github.com/EmanuelBacalhau.png"
                      alt="Foto perfil"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div className="flex flex-col text-sm">
                      <span>JavaScript</span>
                      <span className="text-gray-400">02-10-2024</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Image
                      src="https://github.com/EmanuelBacalhau.png"
                      alt="Foto perfil"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div className="flex flex-col text-sm">
                      <span>Scrum</span>
                      <span className="text-gray-400">02-10-2024</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Image
                      src="https://github.com/EmanuelBacalhau.png"
                      alt="Foto perfil"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div className="flex flex-col text-sm">
                      <span>SQL</span>
                      <span className="text-gray-400">02-10-2024</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Image
                      src="https://github.com/EmanuelBacalhau.png"
                      alt="Foto perfil"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div className="flex flex-col text-sm">
                      <span>SQL</span>
                      <span className="text-gray-400">02-10-2024</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Image
                      src="https://github.com/EmanuelBacalhau.png"
                      alt="Foto perfil"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div className="flex flex-col text-sm">
                      <span>SQL</span>
                      <span className="text-gray-400">02-10-2024</span>
                    </div>
                  </div>
                </CardContent>
              </div>
              <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="leading-none text-muted-foreground">
                  Mostrando os 4 últimos cadastrados
                </div>
              </CardFooter>
            </Card>
          </div>
        )}
      </section>
    </main>
  )
}
export default DashboardPage
