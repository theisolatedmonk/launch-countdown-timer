import Image from 'next/image'

import bgStars from '@/Components/images/bg-stars.svg'
import bgHill from '@/Components/images/pattern-hills.svg'
import facebook from '@/Components/images/icon-facebook.svg'
import instagram from '@/Components/images/icon-instagram.svg'
import pinterest from '@/Components/images/icon-pinterest.svg'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  relative ">
      <div className="w-full h-full">
        <Image src={bgStars} alt={''}/>
        <Image src={bgHill} alt={''}/>
      </div>
      <div className="absolute w-full h-full bg-white opacity-20">
        <div className="flex flex-col">
          <p>WE'RE LAUNCHING SOON</p>
          <div className="flex flex-col relativeiv  items-center  w-60 h-40">
          <div className='w-60 h-40 rounded-b-lg bg-red-500'></div> 

          <div className='w-60 h-40 rounded-t-lg  bg-red-500'></div>
          <div className="absolute top-24 left-24 z-10">08</div>
          </div>
        </div>
        <div className="flex top-52 h-10 items-center justify-center gap-2 absolute  left-6 ">
        <Image src={facebook} alt={''}/>
        <Image src={instagram} alt={''}/>
        <Image src={pinterest} alt={''}/>
      </div>
      </div>
    
    </main>
  )
}
