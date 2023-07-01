import Image from 'next/image'

import bgStars from '@/Components/images/bg-stars.svg'
import bgHill from '@/Components/images/pattern-hills.svg'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  relative ">
      <div className="w-full h-full">
        <Image src={bgStars} alt={''}/>
        <Image src={bgHill} alt={''}/>
      </div>
      {/* <div className="absolute w-full h-full bg-black opacity-20">
        <div className="flex flex-col">
          <p>WE'RE LAUNCHING SOON</p>
          <div className="flex flex-col relativeiv  items-center  w-60 h-40">
          <div className='w-60 h-40 rounded-b-lg bg-red-500'></div> 

          <div className='w-60 h-40 rounded-t-lg  bg-red-500'></div>
          <div className="absolute top-24 left-24 z-10">08</div>
          </div>
        </div>
      </div> */}
    </main>
  )
}
