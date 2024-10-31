'use client'
import Link from "next/link"
import { Button } from "../ui/button"
import { Play, MessageCircle, Github, Mail } from "lucide-react"

export default function Buttongrid() {
    return(
        <div className=" grid-rows grid-cols-3 grid gap-3 p-8 my-0 ">

          <Link href="https://web.whatsapp.com"><Button className="h-32 w-32 rounded-2xl border-zinc-800 border-2" variant={"secondary"}>
          <MessageCircle size={34} strokeWidth={2} className="" />
          </Button></Link>


          <Link href="https://youtube.com"><Button className="h-32 w-32 rounded-2xl border-zinc-800 border-2" variant={"secondary"}>
          <Play size={48} strokeWidth={2} />
          </Button></Link>


          <Link href="https://gmail.com"><Button className="h-32 w-32 rounded-2xl border-zinc-800 border-2" variant={"secondary"}>
            <Mail size={48} strokeWidth={2} />
          </Button></Link>

          <Link href="https://github.com"><Button className="h-32 w-32 rounded-2xl border-zinc-800 border-2" variant={"secondary"}>
            <Github size={48} strokeWidth={2} />
          </Button></Link>

          


        </div>

    )
}
