import type { Metadata } from 'next'
import PageTransition from '@/components/PageTransition'
import ChatPage from '@/components/chat/ChatPage'

export const metadata: Metadata = {
  title: 'AI Concierge',
  description: 'Chat with Prisma, the PrismoLens AI concierge. Get instant answers about packages, pricing, and booking.',
  alternates: { canonical: 'https://www.prismolens.ph/chat' },
  robots: { index: false },
}

export default function Chat() {
  return (
    <PageTransition delay={0}>
      <ChatPage />
    </PageTransition>
  )
}