'use client'

import type { ChartConfig } from '../ui/chart'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts'

interface Data {
  month: string
  quantity: number
}

interface ChartLineProps {
  title: string
  data: Data[]
  config: ChartConfig
  textFooter?: string
}

export const ChartLine = ({
  title,
  data,
  textFooter,
  config,
}: ChartLineProps) => {
  const key = Object.keys(config)[0]

  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <CardTitle className="capitalize">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={config}>
          <LineChart
            accessibilityLayer
            data={data}
            margin={{
              left: 16,
              right: 16,
              top: 16,
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
            <Line dataKey={key} type="linear" strokeWidth={2} dot={false} />
          </LineChart>
        </ChartContainer>
      </CardContent>
      {textFooter && (
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="leading-none text-muted-foreground">{textFooter}</div>
        </CardFooter>
      )}
    </Card>
  )
}
