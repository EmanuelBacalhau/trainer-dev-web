import type { User } from './types/user.type'

type UserLocalStorage = Omit<User, 'createdAt' | 'createdAt' | 'deactivate'>
export function setUserLocalStorage(value: UserLocalStorage) {
  const NAME_OF_DATA_USER_LOCAL_STORAGE = process.env
    .NEXT_PUBLIC_DATA_USER as string
  localStorage.setItem(NAME_OF_DATA_USER_LOCAL_STORAGE, JSON.stringify(value))
}

export function getUserLocalStorage(): UserLocalStorage | null {
  const NAME_OF_DATA_USER_LOCAL_STORAGE = process.env
    .NEXT_PUBLIC_DATA_USER as string
  const user = localStorage.getItem(NAME_OF_DATA_USER_LOCAL_STORAGE)

  return user ? JSON.parse(user) : null
}

export function removeUserLocalStorage() {
  const NAME_OF_DATA_USER_LOCAL_STORAGE = process.env
    .NEXT_PUBLIC_DATA_USER as string
  localStorage.removeItem(NAME_OF_DATA_USER_LOCAL_STORAGE)
}
