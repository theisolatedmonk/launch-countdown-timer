import React from "react";

type CountType = {
  count: string;
  timeFormat: string;
};

export default function Count(props: CountType) {
  return (
   
      <div className="w-32 h-16 rounded-lg  bg-red-500 flex   items-center justify-center flex-col">
      <div className=" top-20 text-3xl left-28 z-10 font-bold">
        {props.count} 
      </div>
      <div className="text-sm text-red-900 bg-yellow-100 w-full h-full">{props.timeFormat }</div>


      </div>

    
  );
}



