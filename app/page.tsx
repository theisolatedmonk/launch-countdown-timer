import Image from 'next/image'

import bgStars from '@/Components/images/bg-stars.svg'
import bgHill from '@/Components/images/pattern-hills.svg'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-b p-24">
      <div className="w-full h-full">
        <Image src={bgStars} alt={''}/>
        <Image src={bgHill} alt={''}/>
      </div>
    </main>
  )
}
