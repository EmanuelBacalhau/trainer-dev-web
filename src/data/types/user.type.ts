export interface User {
  id: string
  avatar: string | null
  name: string
  email: string
  role: string
  deactivate: boolean
  createdAt: Date
}
