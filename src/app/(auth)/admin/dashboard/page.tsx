'use client'

import { ChartLine } from '@/components/chart-line'
import { Header } from '@/components/header'
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

  const fetchDataCount = async () => {
    const response = await api('/users/count-users-last-6-months', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await response.json()
    setDataCount(data as CountDataType[])
  }

  useEffect(() => {
    Promise.all([fetchDataCount()])
  }, [])

  return (
    <div className="flex flex-col gap-5">
      <Header />

      <main className="space-y-5 px-5 pb-5">
        {quantitiesData.length === 0 ? (
          <Skeleton className="h-24 w-full" />
        ) : (
          <div className="flex w-full flex-wrap items-center gap-3 lg:gap-5 lg:text-xl">
            <div className="flex flex-1 items-center justify-center gap-5 rounded-md border border-solid p-2 lg:p-4">
              <span className="font-semibold">
                Usuários <br /> 100
              </span>

              <UserIcon className="h-10 w-10 lg:h-14 lg:w-14" />
            </div>
            <div className="flex flex-1 items-center justify-center gap-5 rounded-md border border-solid p-2 lg:p-4">
              <span className="font-semibold">
                Trilhas <br /> 100
              </span>

              <MonitorPlayIcon className="h-10 w-10 lg:h-14 lg:w-14" />
            </div>
            <div className="flex flex-1 items-center justify-center gap-5 rounded-md border border-solid p-2 lg:p-4">
              <span className="font-semibold">
                Módulos <br /> 150
              </span>

              <PuzzleIcon className="h-10 w-10 lg:h-14 lg:w-14" />
            </div>
            <div className="flex flex-1 items-center justify-center gap-5 rounded-md border border-solid p-2 lg:p-4">
              <span className="font-semibold">
                Aulas <br /> 1000
              </span>

              <PresentationIcon className="h-10 w-10 lg:h-14 lg:w-14" />
            </div>
          </div>
        )}

        {dataCount.length === 0 ? (
          <Skeleton className="h-96 w-full" />
        ) : (
          <div className="flex max-h-96 flex-col gap-5 xl:flex-row">
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

            <Card className="flex-1">
              <CardHeader>
                <CardTitle>Usuários recentes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Image
                      src="https://github.com/EmanuelBacalhau.png"
                      alt="Foto perfil"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div className="flex flex-col text-sm">
                      <span>Emanuel Bacalhau</span>
                      <span className="text-gray-400">02-10-2024</span>
                    </div>
                  </div>

                  <span className="text-sm">Instrutor</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Image
                      src="https://github.com/EmanuelBacalhau.png"
                      alt="Foto perfil"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div className="flex flex-col text-sm">
                      <span>Emanuel Bacalhau</span>
                      <span className="text-gray-400">02-10-2024</span>
                    </div>
                  </div>

                  <span className="text-sm">Instrutor</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Image
                      src="https://github.com/EmanuelBacalhau.png"
                      alt="Foto perfil"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div className="flex flex-col text-sm">
                      <span>Emanuel Bacalhau</span>
                      <span className="text-gray-400">02-10-2024</span>
                    </div>
                  </div>

                  <span className="text-sm">Instrutor</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Image
                      src="https://github.com/EmanuelBacalhau.png"
                      alt="Foto perfil"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div className="flex flex-col text-sm">
                      <span>Emanuel Bacalhau</span>
                      <span className="text-gray-400">02-10-2024</span>
                    </div>
                  </div>

                  <span className="text-sm">Instrutor</span>
                </div>
              </CardContent>
              <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="leading-none text-muted-foreground">
                  Mostrando os 4 últimos cadastrados
                </div>
              </CardFooter>
            </Card>

            <Card className="flex-1">
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
              </CardContent>
              <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="leading-none text-muted-foreground">
                  Mostrando os 4 últimos cadastrados
                </div>
              </CardFooter>
            </Card>
          </div>
        )}
      </main>
    </div>
  )
}
export default DashboardPage
