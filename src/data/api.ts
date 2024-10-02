export function api(path: string, fetchOption?: RequestInit) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL
  return fetch(`${baseUrl}${path}`, fetchOption)
}
