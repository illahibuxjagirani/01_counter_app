'use client'
import { useEffect, useState } from "react";





export default function Home() {
  let [count, setCount] = useState(0);
  let [running, setRunning] = useState(false);

  useEffect(()=>{
    let timer: any;
    if(running){
      timer = setInterval(()=>{
        setCount((prevCount) => prevCount + 1);
      }, 500)
    }

    return () => {
      clearInterval(timer);
    }
  }, [running, count]);

  const handleStart = () =>{
    setRunning(true)
  }

  const handlePause = () => {
    setRunning(false)
  }

  const handleEnd = () => {
    setRunning(false);
    setCount(0)
  }

  return (
    <div id="main" className="h-screen flex justify-center items-center">

      <div className="
      bg-slate-300 
      p-10 shadow-lg 
      shadow-slate-700
      flex
      flex-col
      gap-10
      items-center
      rounded-lg
      ">

        <h1 className="text-4xl font-bold">Counter App</h1>
        <p className="font-bold text-3xl">{count}</p>

        {/* buttons */}
        <div className="flex gap-4">
        <button onClick={handleStart}
        className="
        bg-slate-800
        text-white
        p-3
        rounded-lg
        hover:bg-slate-900
        "
        >Start</button>

        <button onClick={handlePause}
        className="
        bg-slate-800
        text-white
        p-3
        rounded-lg
        hover:bg-slate-900
        ">Pause</button>

        <button onClick={handleEnd}
         className="
        bg-slate-800
        text-white
        p-3
        rounded-lg
        hover:bg-slate-900
        ">End</button>
        </div>
      </div>
    </div>
  );
}
