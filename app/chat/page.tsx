import type { Metadata } from 'next'
import ChatPage from '@/components/chat/ChatPage'

export const metadata: Metadata = {
  title: 'AI Concierge',
  description: 'Chat with Prisma, the PrismoLens AI concierge. Get instant answers about packages, pricing, availability, and how to book.',
  alternates: {
    canonical: 'https://www.prismolens.ph/chat',
  },
  robots: {
    index: false,
  },
}

export default function Chat() {
  return <ChatPage />
}