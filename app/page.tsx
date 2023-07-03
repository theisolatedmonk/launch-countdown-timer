import Image from "next/image";

import bgStars from "@/Components/images/bg-stars.svg";
import bgHill from "@/Components/images/pattern-hills.svg";
import facebook from "@/Components/images/icon-facebook.svg";
import instagram from "@/Components/images/icon-instagram.svg";
import pinterest from "@/Components/images/icon-pinterest.svg";
import Count from "@/Components/Count";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  relative ">
      <div className="w-full h-full">
        <Image src={bgStars} alt={""} />
        <Image src={bgHill} alt={""} />
      </div>
      <div className="absolute w-full h-full bg-white opacity-20 justify-center items-center z-10">
        <div className="flex flex-col gap-2 justify-center items-cente w-full h-full">
          <p className=" text-white text-center bg-green-500">WE'RE LAUNCHING SOON</p>
          <div
            className="flex justify-center
"
          >
            <Count count={"4"} timeFormat={"DAYS"} />
            <Count count={"3"} timeFormat={"HOURS"} />
            <Count count={"2"} timeFormat={"MINUTES"} />
            <Count count={"1"} timeFormat={"SECONDS"} />
                  
          </div>
          <div className="flex  h-10 items-center justify-center gap-2   ">
        <Image src={facebook} alt={''}/>
        <Image src={instagram} alt={''}/>
        <Image src={pinterest} alt={''}/>
      </div>
        </div>
      </div>
    </main>
  );
}
