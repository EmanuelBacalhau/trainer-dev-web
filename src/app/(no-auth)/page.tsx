'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { api } from '@/data/api'
import { setUserLocalStorage } from '@/data/local-storage-manager'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoaderCircleIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { setCookie } from 'nookies'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const formSchema = z.object({
  email: z
    .string({
      message: 'Campo obrigatório',
    })
    .email({
      message: 'E-mail inválido',
    }),
  password: z
    .string({
      message: 'Campo obrigatório',
    })
    .min(8, {
      message: 'Mínimo de 8 caracteres',
    }),
})

type FormValues = z.infer<typeof formSchema>

export default function Auth() {
  const [isLoadingAuth, setIsLoadingAuth] = useState<boolean>(false)
  const router = useRouter()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  })

  const handleSubmit = form.handleSubmit(async (data: FormValues) => {
    setIsLoadingAuth(true)

    const responseAuth = await api('/auth/credentials', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (responseAuth.ok) {
      const { token } = await responseAuth.json()

      const COOKIE_AGE = 60 * 60 * 24 // 24 hours

      const NAME_OF_TOKEN = process.env.NEXT_PUBLIC_TOKEN as string

      setCookie(null, NAME_OF_TOKEN, token, {
        maxAge: COOKIE_AGE,
      })

      const response = await api('/users/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const user = await response.json()

      setUserLocalStorage(user)

      switch (user.role) {
        case 'ADMIN':
          router.push('/admin/dashboard')
          break
        case 'TRAINER':
          router.push('/trainer/dashboard')
          break
        default:
          router.push('/dashboard')
          break
      }
    } else if (responseAuth.status === 401) {
      toast.error('E-mail ou senha inválidos', {
        position: 'top-center',
      })
    }

    setIsLoadingAuth(false)
  })

  return (
    <div className="flex h-full items-center justify-center bg-primary px-4">
      <div className="w-full rounded-md bg-white px-2 py-3">
        <h1 className="mb-3 text-center text-3xl font-bold">
          trainer<span className="text-primary">.dev</span>
        </h1>
        <Form {...form}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Ex: johnDoe@smn.com.br"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Ex: 123456"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="mt-2 w-full">
              {isLoadingAuth ? (
                <LoaderCircleIcon className="animate-spin" />
              ) : (
                'Entrar'
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
