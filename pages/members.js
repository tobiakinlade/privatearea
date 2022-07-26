import React from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { getMarkdown } from 'lib/markdown'

export default function Members({ markdown }) {
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

  if (!session.user.isSubscriber) {
    router.push('/join')
    return
  }

  console.log(session.user.isSubscriber)
  return (
    <div className='markdown' dangerouslySetInnerHTML={{ __html: markdown }} />
  )
}

export async function getServerSideProps(context) {
  const markdown = await getMarkdown()

  return {
    props: {
      markdown,
    },
  }
}
