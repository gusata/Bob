import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Play } from "lucide-react";
import Buttongrid from "@/components/button_grid/buttongrid";
import { Clock } from "@/components/clock/clock";
import Editor from "@/components/editor/editor";

export default function Home() {
  const now = new Date()
  return (
      <div className="min-h-screen text-zinc-900 bg-slate-50 grid grid-cols-[30rem_1fr] p-8 ">
      
        <div className="items-center flex flex-col border-r-2">
          <Clock time={now.getTime()}/> 
          

          <Buttongrid/>
        </div>


        <div className="">
          <Editor/>
        </div>

      </div>
  );
}
