export function api(path: string, fetchOption?: RequestInit) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL
  console.log(baseUrl)

  return fetch(`${baseUrl}${path}`, fetchOption)
}
