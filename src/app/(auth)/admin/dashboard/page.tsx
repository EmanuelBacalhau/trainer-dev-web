'use client'

import { Header } from '@/components/header'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import {
  MonitorPlayIcon,
  PresentationIcon,
  PuzzleIcon,
  UserIcon,
} from 'lucide-react'
import Image from 'next/image'
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts'

const DashboardPage = () => {
  const chartData = [
    { month: 'January', desktop: 186 },
    { month: 'February', desktop: 305 },
    { month: 'March', desktop: 237 },
    { month: 'April', desktop: 73 },
    { month: 'May', desktop: 209 },
    { month: 'June', desktop: 214 },
  ]

  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: 'hsl(var(--chart-1))',
    },
  } satisfies ChartConfig

  return (
    <div className="flex flex-col gap-5">
      <Header />

      <main className="space-y-5 px-5 pb-5">
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

        <div className="flex max-h-96 flex-col gap-5 xl:flex-row">
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>Janeiro - Junho 2024</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <LineChart
                  accessibilityLayer
                  data={chartData}
                  margin={{
                    left: 12,
                    right: 12,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Line
                    dataKey="desktop"
                    type="linear"
                    stroke="var(--color-desktop)"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
              <div className="leading-none text-muted-foreground">
                Mostrando o total de usuários cadastrados nos últimos 6 meses
              </div>
            </CardFooter>
          </Card>

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
      </main>
    </div>
  )
}
export default DashboardPage
