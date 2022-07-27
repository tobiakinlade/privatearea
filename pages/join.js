import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React from 'react'
import Head from 'next/head'
import { resolve } from 'styled-jsx/css'

export default function Join() {
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
  return (
    <div>
      <Head>
        <title>Private Area</title>
        <meta name='description' content='private area' />
      </Head>

      <div className='text-center'>
        <h1 className='mt-20 font-extrabold text-2xl'>Private Area</h1>
        <p className='mt-10'>Join for just $5/m</p>
        <button
          className='mt-10 bg-black text-white px-5 py-2'
          onClick={async () => {
            const res = await fetch('/api/stripe/session', {
              method: 'POST',
            })
            const data = await res.json()
          }}
        >
          Create a subscription
        </button>
      </div>
    </div>
  )
}
