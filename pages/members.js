import React from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

export default function Members() {
  const router = useRouter()

  const { data: session, status } = useSession()

  const loading = status === 'loading'

  if (loading) {
    return null
  }

  if (!session) {
    router.push('/')
    return
  }
  return <div>Member</div>
}
