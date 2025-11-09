"use client";

import { useEffect, useState } from "react";
import { Clock } from "@/components/clock/clock";
import Buttongrid from "@/components/button_grid/buttongrid";
import Editor from "@/components/editor/editor";
import { Tema } from "@/components/tema/tema";
import Nav from "@/components/navbar/page";


export default function Home() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
  }, []);

  return (
    <div className="min-h-screen text-zinc-900 bg-[#f2f2f2] dark:bg-zinc-900 dark:text-zinc-100 grid grid-cols-[30rem_1fr] p-8 transition-all">
        <Nav />
      <div className="items-center flex flex-col border-r-2 border-zinc-300 dark:border-zinc-700">
        
        {now && <Clock time={now} />}
        
     
        <Buttongrid />
      </div>

      <div>
        <Editor />
      </div>
    </div>
  );
}
