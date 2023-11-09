import Button from '@/components/ui/button'
import { db } from '@/lib/db'

export default async function Home() {
  await db.set('hello', 'hello')
  return (
    <div>
      <a href="/dashboard"><Button>Main Dashboard</Button></a>
      <a href="/other-dashboard"><Button>Other Dashboard</Button></a>
    </div>
  )
}