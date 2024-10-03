import { SheetClose, SheetContent, SheetHeader, SheetTitle } from '../ui/sheet'

export const Sidebar = () => {
  return (
    <SheetContent side="left" className="w-[90%] xl:hidden">
      <SheetHeader>
        <SheetTitle className="mb-3 mt-3 text-center text-2xl font-bold">
          trainer<span className="text-primary">.dev</span>
        </SheetTitle>
      </SheetHeader>

      <SheetClose>Tete</SheetClose>
    </SheetContent>
  )
}
