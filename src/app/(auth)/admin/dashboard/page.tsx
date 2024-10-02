import { Header } from '@/components/header'
import {
  MonitorPlayIcon,
  PresentationIcon,
  PuzzleIcon,
  UserIcon,
} from 'lucide-react'

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <Header />

      <main className="space-y-5 px-5">
        <div className="flex w-full flex-wrap items-center gap-2">
          <div className="flex flex-1 items-center justify-center gap-5 rounded-md border border-solid p-2">
            <span className="font-semibold">
              Usuários <br /> 100
            </span>

            <UserIcon className="h-10 w-10" />
          </div>
          <div className="flex flex-1 items-center justify-center gap-5 rounded-md border border-solid p-2">
            <span className="font-semibold">
              Trilhas <br /> 100
            </span>

            <MonitorPlayIcon className="h-10 w-10" />
          </div>
          <div className="flex flex-1 items-center justify-center gap-5 rounded-md border border-solid p-2">
            <span className="font-semibold">
              Módulos <br /> 150
            </span>

            <PuzzleIcon className="h-10 w-10" />
          </div>
          <div className="flex flex-1 items-center justify-center gap-5 rounded-md border border-solid p-2">
            <span className="font-semibold">
              Aulas <br /> 1000
            </span>

            <PresentationIcon className="h-10 w-10" />
          </div>
        </div>
      </main>
    </div>
  )
}
export default DashboardPage
